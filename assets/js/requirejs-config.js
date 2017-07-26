require.config({
    baseUrl: "assets/js",
    paths: {
        bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
        jquery: "../../bower_components/jquery/dist/jquery",
        backbone: "../../bower_components/backbone/backbone",
        underscore: "../../bower_components/underscore/underscore",
        marked: "../../bower_components/marked/lib/marked",
        requirejs: "../../bower_components/requirejs/require",
        "requirejs-text": "../../bower_components/requirejs-text/text"
    },
    shim: {
        bootstrap: {
            deps: [
                "jquery"
            ]
        },
        underscore: {
            export: "_"
        },
        jquery: {
            export: "$"
        }
    },
    packages: [

    ]
});

require( ["dist"] );