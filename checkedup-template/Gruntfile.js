module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        wiredep: {
            target: {
                src: ['app/index.html']
            }
        },
        watch: {
            files: ['app/bower_components/*'],
            tasks: ['wiredep']
        }
    });

    grunt.registerTask('default', ['wiredep']);
    grunt.registerTask('changes', ['watch']);
};