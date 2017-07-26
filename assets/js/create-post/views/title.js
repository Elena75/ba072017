// assets/js/create-post/views/title

define([
    "backbone",    
    "requirejs-text!../templates/title.html"
], function( Backbone, tpl ) {

    var view = Backbone.View.extend({
        template : _.template( tpl ),       

        initialize : function( options ) {
            /*Feld „Titel“ im Modell geändert - Abbildung neu zu zeichnen*/
            this.listenTo( this.model, "change:title", this.render );
        },

        render : function() {
            // Von Modell in Schablone
            this.$el.empty().append( this.template( this.model.toJSON() ) );
            return this;
        }

    });

    return view;
});