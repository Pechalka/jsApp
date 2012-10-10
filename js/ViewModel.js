define(["jquery"], function ($) {
    var vm = this;
    vm.templateName = '';
    vm.data = {};
    return function (options, responseData, layoutData, callback) {
        vm.templateName = options.template;
        vm.data = responseData || {};
        if (!options.viewModel) {
            callback(vm);
        } else {
            require(["/js/viewModels/" + options.viewModel + ".js"], function (viewModel) {
                $.extend(vm.data, new viewModel(responseData, layoutData));
                callback(vm);
            });
        }

    };
});