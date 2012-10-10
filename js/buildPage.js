define(["jquery", "knockout", "/js/ViewModel.js", "text"], function ($, ko, ViewModel) {
    return function (screen, responseData, callback) {
        var layoutName = screen.layout;
        if (layoutName) {
            require(["/js/layouts/" + layoutName + ".js", 'text!/js/templates/_' + layoutName + ".html"], function (layoutViewModel, layoutHtml) {// if screen have layout load it resurces
                var layoutData = new layoutViewModel(responseData);
                var vml = new ViewModel(screen, responseData, layoutData, function (screenSection) {
                    layoutData.content = screenSection; // layout vm should contain content observable, for render screen inside

                    callback({
                        html: ko.observable(layoutHtml),
                        data: ko.observable(layoutData)
                    });
                });
            });


        } else {
            var vm = new ViewModel(screen, responseData, null, function (screenSection) {
                callback(screenSection);
            });

        }
    };
});

