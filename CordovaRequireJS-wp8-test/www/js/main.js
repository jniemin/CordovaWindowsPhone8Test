requirejs.config({
    paths: {
        jquery: 'ext/jquery-1.8.3.min',
        underscore: 'ext/underscore-min',
        backbone: 'ext/backbone',
        marionette: 'ext/backbone.marionette',
        application : 'app/application'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Backbone.Marionette'
        }
    }
});

require([
    'ext/domReady', 'jquery', 'app/helper','application'

], function(domReady, $, helper, application) {   

    return domReady(function(){        
        application.start();
        $("#changethis").html("Changed by Main.js after application start");
    });
});