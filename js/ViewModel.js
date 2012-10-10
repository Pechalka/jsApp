define(["jquery", "knockout", "text"], function ($, ko) {

    return function (options, responseData, layoutData, callback) {
        var vm = this;
        vm.html = ko.observable(null);
        vm.data = ko.observable(null);
        
        var files = ["text!/js/templates/" + options.template + ".html"];
        if (options.viewModel)
            files.push("/js/viewModels/" + options.viewModel + ".js");
        
        require(files, function (screenHtml, viewModel) {
            responseData = responseData || {};
            vm.html(screenHtml);
            if (viewModel) 
                $.extend(responseData, new viewModel(responseData, layoutData));
            
            vm.data(responseData);
            callback(vm);
        });
    };
});