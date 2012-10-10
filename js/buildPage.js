define(["jquery", "knockout", "/js/Screen.js", "text"], function ($, ko, Screen) {
    return function (screenOptions, responseData, callback) {
        var layoutName = screenOptions.layout;
        if (layoutName) {
            require(["/js/layouts/" + layoutName + ".js", 'text!/js/templates/_' + layoutName + ".html"], function (layoutViewModel, layoutHtml) {// if screen have layout load it resurces
                var layoutData = new layoutViewModel(responseData);
                var vml = new Screen(screenOptions, responseData, layoutData, function (screen) {
                    layoutData.content = screen; // layout vm should contain content observable, for render screen inside

                    callback({
                        html: ko.observable(layoutHtml),
                        data: ko.observable(layoutData)
                    });
                });
            });


        } else {
            var vm = new Screen(screenOptions, responseData, null, function (screen) {
                callback(screen);
            });

        }
    };
});

