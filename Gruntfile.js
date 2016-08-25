module.exports = function (grunt) {

    var env_name = process.env.TT || 'dev';
    var config = grunt.file.readJSON('package.json');
    var env = config.environments[env_name];
    var modRewrite = require('connect-modrewrite');
    var serveStatic = require('serve-static');

    // Project configuration.
    grunt.initConfig({
        base: env.base,
        connect: {
            options: {
                port: 8000,
                base: 'dist',
                open: true,
                keepalive: true,
                middleware: function (connect, options, middlewares) {
                    middlewares.unshift(function (req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        return next();
                    });

                    middlewares.push(modRewrite(['^[^\\.]*$ /' + env.base + '/index.html [L]'])); //Matches everything that does not contain a '.' (period)
                    options.base.forEach(function (base) {
                        middlewares.push(serveStatic(base));
                    });

                    middlewares.push(require('connect-livereload')());
                    return middlewares;
                }
            },

            server: {

            }
        },
        watch: {
            js: {
                files: ['src/js/*.js', 'src/**/**'],
                tasks: ['clean:preBuild', 'copy:dev', 'wiredep', 'includeSource']
            },
            scss: {
                files: ['src/scss/*.scss', 'src/**/**'],
                tasks: ['clean:preBuild', 'copy:dev', 'sass:dist', 'wiredep', 'includeSource']
            },
            options: {
                livereload: 1337
            }
        },
        copy: {
            dev: {
                cwd: 'src/',
                src: ['!scss', '**/**', '!tests', '!**/**/tests'],
                dest: 'dist/<%= base %>/',
                expand: true
            },
            build:{
                cwd: 'src/',
                src: ['**/**'],
                dest: 'profile/',
                expand: true
            }
        },
        wiredep: {
            task: {
                src: [
                    'dist/<%= base %>/*.html'
                ]
            }
        },
        includeSource: {
            options: {
                basePath: 'dist/<%= base %>',
                baseUrl: '',
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>'
                    }
                }
            },
            dev: {
                files: {
                    'dist/<%= base %>/index.html': 'dist/<%= base %>/index.html'
                }
            }
        },
        concurrent: {
            watcher: ['watch', 'connect'],
            options: {
                logConcurrentOutput: true
            }
        },
        clean: {
            preBuild: ['dist/profile']
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'dist/profile/css/deploy.css': 'src/scss/deploy.scss',       // 'destination': 'source'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['clean:preBuild', 'copy:dev', 'sass:dist', 'wiredep', 'includeSource', 'concurrent']);
    grunt.registerTask('build', ['copy:build', 'wiredep']);

};
