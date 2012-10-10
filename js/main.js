require.config({
    paths: {
        "jquery": "/Scripts/jquery-1.8.2.min",
        "knockout": "/Scripts/knockout-2.1.0",
        "text": "/Scripts/text",
        "sammy": "/Scripts/sammy/sammy.min"
    },
    shim: {
        "sammy": ["jquery"]
    }
});


require(["knockout", "jquery", "/js/app.js", "/js/layouts/baseLayout.js", "/js/layouts/catalogLayout.js"], function (ko, $, app, baseLayout, catalogLayout) {
    $(function () {
        app.registerScreen({
            dataUrl: '/home/GetMenu',
            hash: '/?',
            layout: baseLayout,
            template: "dashbord"
        });
        app.registerScreen({
            dataUrl: 'home/GetTemplatets',
            hash: '/?#templates',
            layout: catalogLayout,
            template: "templateList",
            viewModel: 'templateList'
        });
        app.registerScreen({
            dataUrl: '/home/GetTemplate',
            hash: '/?#templates/:id',
            layout: catalogLayout,
            template: "templateEdit",
            viewModel: 'templateEdit'
        });

        app.registerScreen({
            dataUrl: '/home/GettestData',
            hash: '/?#test',
            template: "test"
        });

        app.registerScreen({
            dataUrl: '/home/GetMediaBoxData',
            hash: '/?#mediaboxsetup',
            layout: catalogLayout,
            template: "mediaboxsetup",
            viewModel: 'mediaboxsetup'
        });

        app.registerScreen({
            hash: '/?#staticHtml',
            template: "statichtml",
            viewModel: 'statichtml'
        });
        app.start();
    });
});