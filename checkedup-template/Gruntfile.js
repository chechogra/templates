module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-injector');

    grunt.initConfig({
        wiredep: {
            target: {
                src: ['app/index.html']
            }
        },
        injector: {
            options: {
                addRootSlash:false,
                relative: true
            },
            local_dependencies: {
                files: {
                    'app/index.html': ['app/scripts/**/*.js', 'app/styles/**/*.css']
                }
            }
        },
        watch: {
            bower:{
                files: ['app/bower_components/*'],
                tasks: ['wiredep']
            },
            scripts:{
                files: ['app/scripts/**/*.js'],
                tasks:['inject']
            },
            css:{
                files:['app/styles/**/*.css'],
                tasks:['inject']
            }

        }
    });

    grunt.registerTask('default', ['wiredep']);
    grunt.registerTask('inject', ['injector']);
    grunt.registerTask('changes', ['watch']);
};