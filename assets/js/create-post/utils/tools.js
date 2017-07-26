define( function() {
    return {
        
        // Lesezeit wird berechnet
        getReadingTime : function( text, speed ) {
            var symbolsCount = this.getSymbolsCount( text );
            
            return parseFloat( symbolsCount / speed ).toFixed (2);
        },
        
        getReadingTimeText : function( minutes ) {
            var text = "Haben Sie bitte Geduld";
            
            if ( minutes <= 1.5 ) {
                return "weniger als eine Minute";
            }
            
            if ( minutes <= 3.5 ) {
                return "ca. drei Minuten";
            }
            
            if ( minutes <= 5.5 ) {
                return "weniger als 5 Minuten";
            }
            
            if ( minutes <= 12 ) {
                return "ca. zehn Minuten";
            }
                
            return text;                
        },
        
        // Anzahl der Zeichen pro Zeile
        getSymbolsCount : function( text ) {
            // alle nicht-signifikanten Zeichen entfernen
            var re;
            var special = " .,!#?-_+*=[]{}()<>$@%^&";
            
            for( var i = 0; i<special.length; i++ ) {
                var s = special[i];
                
                re = new RegExp("\\" + s, "g");
                text = text.replace( re, '' );
            };
            
            var count = text.length
            return count;
        }
        
    };
} );