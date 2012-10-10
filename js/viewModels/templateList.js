define([], function () {
    return function (data, layout) {
        var self = this;
        layout.selectedItem('#templates');
        self.goToEdit = function (item) {
            location.hash = '#templates/' + item.Id;
        };
    };
});