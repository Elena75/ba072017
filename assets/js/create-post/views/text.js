// assets/js/create-post/views/text

define([
    "backbone",    
    "marked",
    "requirejs-text!../templates/text.html"    
], function( Backbone, marked, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),       

        initialize : function( options ) {
            // Wenn Feld "Text" geändert - view ändern
            this.listenTo( this.model, "change:text", this.render );
        },

        render : function() {
            var html = marked( this.model.get("text") );
            
            // HTML-Text in die Template 
            this.$el.empty().append( this.template( {
                html : html
            } ) );
            return this;
        }

    });

    return view;
});