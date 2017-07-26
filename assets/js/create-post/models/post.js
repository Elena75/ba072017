define( [ "backbone" ], function( Backbone ) {
    
    var model = Backbone.Model.extend({        

        // Standardwerte 
        defaults : {
            "title" : "",
            "text"  : ""
        },

        initialize : function( options ) {
            
        }

    });

    return model;
});