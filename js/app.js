define(["jquery", "knockout", "/js/Screen.js", "sammy"], function ($, ko, Screen) {
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
                                                Screen(screen, responseData, function (page) {
                                                    self.content(page);
                                                });

                                            });
                                        } else {
                                            Screen(screen, null, function (page) {
                                                self.content(page);
                                            });
                                        }


//                    if (screen.dataUrl) {
//                        $.get(screen.dataUrl, this.params.toHash(), function(responseData) {
//                            var vm = new ViewModel(responseData, screen.viewModel, screen.template, function(s) {
//                                self.content(s);
//                            });

//                            var vm2 = new ViewModel(responseData, screen.viewModel, screen.template, function(s) {
//                                new ViewModel(responseData, screen.viewModel, screen.template, function(l) {
//                                    self.content(s);                                
//                                });
//                            });
//                        });

//                    } else {
//                        Screen(screen, null, function (page) {
//                            self.content(page);
//                        });
//                    }
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


////ViewModel.js
//define(["jquery", "knockout"], function ($, ko) {
//    return function (data, modelName, templateName, callback) {
//        var vm = this;

//        s.data = ko.observable(null);
//        s.html = ko.observable(null);

//        var params = ["text!/Scripts/js/templates/" + templateName + ".html"];
//        if (modelName != '')
//            params.push("/Scripts/js/modules/" + modelName + ".js");

//        require(params, function (html, model) {
//            data = data || {};
//            $.extend(data, new model(data));

//            vm.html(html);
//            vm.data(data);

//            callback(vm);
//        });
//    };
//});


