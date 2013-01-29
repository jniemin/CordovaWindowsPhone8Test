define(['jquery', 'marionette'], function ($, Marionette) {

            "use strict";

            var app = new Backbone.Marionette.Application({});

            app.on("initialize:before", function (options) {
                //alert('initialize:before');
                $("#changethis_before").html("Changed by application initialize:before");
                console.log('application initializing...');                
            });

            app.on("initialize:after", function (options) {
                //alert('initialize:after');
                $("#changethis_after").html("Changed by application initialize:after");
                console.log('application initialized');
            });

            return app;
        }
);