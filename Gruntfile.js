module.exports = function(grunt) {    
    // Konfiguration
    grunt.initConfig({
        bowerRequirejs : {
            target: {
                // Pfad zum Konfigfile RequireJS
                rjsConfig: 'assets/js/requirejs-config.js'
            },
            options: {
                 /* Dependencies sind in installierten Paketen inbegriffen
                 Zum Bsp. mit Bootssrap werden "bootstrap" und "jquery" installiert */
                transitive: true
            }
        },
        
        jasmine_node: {
            options: {
                forceExit: true,
                match: '.',
                matchall: false,
                extensions: 'js',
                specNameMatcher: 'spec'
            },
            all: ['.']
        },
        
        less: {
            compile: {                
                files: {
                    'assets/css/main.css': 'assets/less/main.less'
                }
            }
        },
        
        cssmin: {
            // Alle File im assets/css minifizieren
            // in ".min.css" einfügenfügen
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css',
                    ext: '.min.css'
            }]
          }
        },
        
        requirejs: {
            compile: {
                options: {
                    baseUrl: "assets/js",
                    mainConfigFile: "assets/js/requirejs-config.js",
                    name: "app",
                    out: "assets/js/dist.js"
                }
            }
        }
            
    });

    //  // Aufgabe downloaden 
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    
    // Name, mit dem Aufgabe aufgerufen wird.
    grunt.registerTask('update-requirejs', ['bowerRequirejs']);    
    grunt.registerTask('test', ['jasmine_node']);        
    grunt.registerTask('build', [ 'bowerRequirejs', 'jasmine_node', 'less', 'cssmin', 'requirejs' ]);       
}