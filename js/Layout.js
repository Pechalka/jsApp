define([], function () {
    return function (templateName, viewModel) {
        this.template = templateName;
        this.viewModel = viewModel;
    };
});