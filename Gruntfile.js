module.exports = function(grunt) {
 
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*
        *SASS TASK
        */
        sass:{
            dev:{//for dev readable css
                options:{
                    style:'expanded',
                    sourcemap:'none',
                },
                files:{
                    'path where output compiled css' : 'path where to find .scss file',
                }
            },
            dist:{// minified css
                options:{
                    style:'compressed',
                    sourcemap:'none',
                },
                files:{
                    'path where output compiled css' : 'path where to find .scss file',
                }
            }
        },
        
        /*
        *AUTOPREFIXER TASK
        */
        autoprefixer: {
            options: {
                browsers:['last 2 versions'],
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src:'path where to find .css to prefix',
                dest:'path to output prefixed css',
            },
        },
        
        /*
        *CONNECT TASK
        */
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    base: 'index path',
                    livereload: true
                }
            }
        },
        
        /*
        *WATCH TASK
        */
        watch:{
            options:{
                livereload: true
            },
            css:{
                files: '**/*.scss',
                tasks: ['sass','autoprefixer'],
            },
            html:{
                files: 'path to your index.html',
                tasks:['connect']
            }
        }
        
    
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-express-server');
    
    grunt.registerTask('default', ['connect','watch']);
};