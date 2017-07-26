require = require('amdrequire');

require( [ "./tools" ], function(Tools) {
   
    describe("Anzahl signifikanter Zeichen in der Zeile.", function() {    
        it("Nur Buchstabenuchstaben", function() {
            var text = "qwerty";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });  
        
        it("Eliminierung der Zeichensetzung", function() {
            var text = "qwe,,..  ,rty,..!   ";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });
        
        it("Eliminierung des Sonderzeichens", function() {
            var text = "qwe##r#__t__-=<y>*";

            expect( Tools.getSymbolsCount( text ) ).toBe( 6 );
        });
    });
    
    describe("Lesezeit berechnen.", function() {    
        it("Leere Zeile", function() {
            var text = "";

            expect( Tools.getReadingTime( text, 2500 ) == 0.00 ).toBe( true );
        });  
        
        it("Prüfalgorithmus: 6 / 3", function() {
            var text = "qwerty";

            expect( Tools.getReadingTime( text, 3 ) == 2 ).toBe( true );
        });  
        
        it("Wenn Wert eine reelle Zahl, Rundung auf 2 Ziffern: 2 / 2500.", function() {
            var text = "ab";

            expect( Tools.getReadingTime( text, 2500 ) == 0.00 ).toBe( true );
        });  
    });
    
    describe("Herstellung der menschenlesbaren Zeitangabe.", function() {    
        it("weniger als eine Minute", function() {            
            expect( Tools.getReadingTimeText( 0.5 ) == "weniger als eine Minute" ).toBe( true );
            expect( Tools.getReadingTimeText( 1.5 ) == "weniger als eine Minute" ).toBe( true );
        });  
        
        it("ca. drei Minuten", function() {            
            expect( Tools.getReadingTimeText( 1.6  ) == "ca. drei Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 2.5  ) == "ca. drei Minutenт" ).toBe( true );
            expect( Tools.getReadingTimeText( 3    ) == "ca. drei Minuten" ).toBe( true );            
            expect( Tools.getReadingTimeText( 3.5  ) == "ca. drei Minuten" ).toBe( true );            
        });  
        
        it("weniger als 5 Minuten", function() {            
            expect( Tools.getReadingTimeText( 3.6 ) == "weniger als 5 Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 4   ) == "weniger als 5 Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 5   ) == "weniger als 5 Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 5.5 ) == "weniger als 5 Minuten" ).toBe( true );
        });
        
        it("ca. zehn Minuten", function() {            
            expect( Tools.getReadingTimeText( 5.6 ) == "ca. zehn Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 7   ) == "ca. zehn Minuten" ).toBe( true );
            expect( Tools.getReadingTimeText( 12  ) == "ca. zehn Minuten" ).toBe( true );
        });
        
        it("Haben Sie bitte Geduld", function() {            
            expect( Tools.getReadingTimeText( 13 ) == "Haben Sie bitte Geduld" ).toBe( true );
            expect( Tools.getReadingTimeText( 30 ) == "Haben Sie bitte Geduld" ).toBe( true );
        });
    });
    
});