module.exports = function(grunt) {

    var env_name = process.env.TT || 'dev';
    var config = grunt.file.readJSON('package.json');
    var env = config.environments[env_name];

    // Project configuration.
    grunt.initConfig({
        base: env.base,
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'dist',
                    keepalive: true,
                    open: {
                        target: 'http://localhost:9000'
                    }
                }
            }
        },
        watch: {
            js: {
                files: 'src/*.js',
                options: {
                    livereload: true,
                }
            },
        },
        copy: {
            dev: {
                cwd: 'src/',
                src: ['**/**'],
                dest: 'dist/<%= base %>/',
                expand: true
            },
            build:{
                cwd: 'src/',
                src: ['**/**'],
                dest: '<%= base %>/',
                expand: true
            }
        },
        wiredep: {
            task: {
                src: [
                    'dist/<%= base %>/*.html'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy:dev', 'wiredep', 'connect', 'watch:js']);
    grunt.registerTask('build', ['copy:build', 'wiredep']);

};
