// assets/js/create-post/views/meta
define([
    "backbone",   
    "../utils/tools",
    "requirejs-text!../templates/meta.html"
], function( Backbone, Tools, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),    
        
        // Symbol pro Minute
        SYMBOLS_PER_MINUTE : 2500,

        initialize : function( options ) {
            // Wenn Feld „Text“  im Modell geändert - Anzeige ändern
            this.listenTo( this.model, "change:text", this.render );
        },

        render : function() {
            var readingTime = Tools.getReadingTimeText( Tools.getReadingTime( this.model.get("text"), this.SYMBOLS_PER_MINUTE ) );
            
            // Lesezeit ins Schablone weitergeben
            this.$el.empty().append( this.template( {
                readingTime : readingTime
            } ) );
            return this;
        }

    });

    return view;
});