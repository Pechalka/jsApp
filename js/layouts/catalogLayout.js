define(["knockout"], function (ko) {
    return  function () {
        var self = this;
        self.catalogMenu = ko.observableArray([]);
        self.selectedItem = ko.observable('#templates');
        $.get('/home/GetMenu', '', function (data) {
            self.catalogMenu(data.items);
        });
    };
});