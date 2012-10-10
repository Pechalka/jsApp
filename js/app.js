define(["jquery", "knockout", "/js/buildPage.js", "sammy"], function ($, ko, buildPage) {
    var app = $.sammy(function () {
        var self = this;

        self.screens = [];
        self.registerScreen = function (screen) {
            self.screens.push(screen);
        };

        self.content = ko.observable(null);

        self.start = function () {

            var routers = [];
            $.map(self.screens, function (screen) {
                var action = function () {
                    if (screen.dataUrl) {
                        $.get(screen.dataUrl, this.params.toHash(), function (responseData) {
                            buildPage(screen, responseData, function (page) {
                                self.content(page);
                            });

                        });
                    } else {
                        buildPage(screen, null, function (page) {
                            self.content(page);
                        });
                    }
                };
                routers.push(['get', screen.hash, action]);
            });

            self.mapRoutes(routers);
            self.run();
            ko.applyBindings(self);
        };
    });


    return app;
});
