define(["jquery", "knockout", "/js/ViewModel.js"], function ($, ko, ViewModel) {
    function _loadTemplate(templateId) {
        if ($('#' + templateId).length == 0) {
            $.ajax({//https://groups.google.com/forum/?fromgroups=#!topic/knockoutjs/_YJwSs5ZwaE todo: Deferred, timeout
                url: '/Templates/GetTemplate',
                async: false, //!!!
                dataType: "html",
                data: { templateId: templateId },
                type: "GET",
                success: function (template) { $("body").append(template); }
            });
        }
    };

    return function (screen, responseData, callback) {
        _loadTemplate(screen.template); //load template 

        var layout = screen.layout,
                    layoutData = {};

        if (layout && layout.viewModel) //if screen have layout with custom vm, creates it, else vm for layout empty object
            layoutData = new layout.viewModel(responseData);

        var vm = new ViewModel(screen, responseData, layoutData, function (screenSection) {
            if (layout) {//if screen has layout
                layoutData.content = ko.observable(screenSection); // layout vm should contain content observable, for render screen inside
                _loadTemplate(layout.template); //load template 

                callback({
                    templateName: layout.template,
                    data: layoutData
                });

            } else {
                callback(screenSection);
            }
        });
    };
});


