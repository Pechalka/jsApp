define(["knockout", "/js/Layout.js"], function (ko, Layout) {
    return new Layout('_catalogLayout', function () {
        var self = this;
        self.catalogMenu = ko.observableArray([]);
        self.selectedItem = ko.observable('#templates');
        $.get('/home/GetMenu', '', function (data) {
            self.catalogMenu(data.items);
        });
    });
});