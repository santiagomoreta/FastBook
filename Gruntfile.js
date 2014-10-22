module.exports = function(grunt) {
    
    grunt.initConfig({
        jshint: {
            src: ['Gruntfile.js']
        },
        connect: {
            'client-dev': {
                options: {
                    port: process.env.OPENSHIFT_NODEJS_PORT || 9001,
                    hostname: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
                    base: 'design',
                    keepalive: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('default', ['jshint','connect:client-dev']);
    
};