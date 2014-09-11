module.exports = function (grunt) {
    'use strict';
    // global variables are defined here
    var files = {
            lib: [
                '<%= pkg.directories.lib %>/**/*.js',
                '<%= pkg.directories.lib %>/**/*.json'
            ],
            build: [
                'Gruntfile.js',
                'package.json'
            ]
        },
    // the list of files to be documented
        documentationFiles = [].concat(
            files.lib,
            [
                './README.md'
            ]
        ),
    // js-hint default options
        jshintOptions = {
            maxerr: 1000, // {int} Maximum error before stopping
            // Enforcing
            bitwise: true, // true: Prohibit bitwise operators (&, |, ^, etc.)
            camelcase: true, // true: Identifiers must be in camelCase
            curly: true, // true: Require {} for every new block or scope
            eqeqeq: true, // true: Require triple equals (===) for comparison
            forin: true, // true: Require filtering for..in loops with obj.hasOwnProperty()
            immed: true, // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
            indent: 4, // {int} Number of spaces to use for indentation
            latedef: true, // true: Require variables/functions to be defined before being used
            newcap: true, // true: Require capitalization of all constructor functions e.g. `new F()`
            noarg: true, // true: Prohibit use of `arguments.caller` and `arguments.callee`
            noempty: true, // true: Prohibit use of empty blocks
            nonew: true, // true: Prohibit use of constructors for side-effects (without assignment)
            plusplus: true, // true: Prohibit use of `++` & `--`
            quotmark: true, // Quotation mark consistency:
            undef: true, // true: Require all non-global variables to be declared (prevents global leaks)
            unused: true, // true: Require all defined variables be used
            strict: true, // true: Requires all functions run in ES5 Strict Mode
            maxparams: false, // {int} Max number of formal params allowed per function
            maxdepth: false, // {int} Max depth of nested blocks (within functions)
            maxstatements: false, // {int} Max number statements per function
            maxcomplexity: false, // {int} Max cyclomatic complexity per function
            maxlen: 120, // {int} Max number of characters per line
            node: true // Node.js
        };
    // load the required npm tasks
    // ...for cleaning the output directories
    grunt.loadNpmTasks('grunt-contrib-clean');
    // ...for watching for file changes
    grunt.loadNpmTasks('grunt-contrib-watch');
    // ...for code quality
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // ...for generating jsdoc documentation
    grunt.loadNpmTasks('grunt-jsdoc');
    // Project configuration.
    grunt.initConfig({
        // read the package.json for use
        pkg: grunt.file.readJSON('package.json'),
        // clean configuration
        clean: {
            doc: [
                '<%= pkg.directories.doc %>/**/*',
                '!<%= pkg.directories.doc %>/jsdoc.json'
            ]
        },
        // watch configuration
        watch: {
            // watch for javascript changes
            lib: {
                files: files.lib,
                tasks: [
                    'lib-queue'
                ]
            },
            build: {
                files: files.build,
                tasks: [
                    'build-queue'
                ]

            }
        },
        // js-hint configuration
        jshint: {
            // validation for all server javascript files
            lib: {
                src: files.lib,
                options: jshintOptions
            },
            // validation for all server javascript specifications
            build: {
                src: files.build,
                options: jshintOptions
            }
        },
        // jsdoc configuration
        jsdoc: {
            lib: {
                src: documentationFiles,
                dest: '<%= pkg.directories.doc %>',
                options: {
                    configure: '<%= pkg.directories.doc %>/jsdoc.json',
                    template: './node_modules/ink-docstrap/template'
                }
            }
        }
    });
    // for faster builds we make sure that only the changed files are validated
    (function () {
        // save the watch timeouts to keep track of the ongoing watches
        var watchTimeouts = {};
        grunt.event.on('watch', function (action, filepath, target) {
            if (action !== 'deleted' && /\.(js(on)?)$/i.test(filepath)) {
                var config = [],
                    jshintSrc = 'jshint.' + target + '.src';
                if (watchTimeouts[target]) {
                    // if there is an ongoing watch event, append the new files
                    // in the file list
                    clearTimeout(watchTimeouts[target]);
                    config = grunt.config(jshintSrc);
                } else {
                    // in case of a new watch, create a new file list
                    grunt.config(jshintSrc, config);
                }
                // pass the file for jshint validation only if it is a javascript or a json file
                config.push(filepath);
                grunt.config(jshintSrc, config);
                watchTimeouts[target] = setTimeout(function () {
                    watchTimeouts[target] = undefined;
                }, 1000);
            }
        });
    }());
    // scripts exposed from package.json
    // cleanup script
    grunt.registerTask('cleanup', [
        'clean:out'
    ]);
    // init script
    grunt.registerTask('init', [
    ]);
    // test script
    grunt.registerTask('test', [
        'jshint:lib',
        'jshint:build'
    ]);
    // document script
    grunt.registerTask('document', [
        'clean:doc',
        'jsdoc:lib'
    ]);
    // observe scripts
    // tasks to run when files change
    grunt.registerTask('lib-queue', [
        'jshint:lib',
        'document'
    ]);
    grunt.registerTask('build-queue', [
        'jshint:build'
    ]);
    grunt.registerTask('observe', [
        'init',
        'test',
        'document',
        'watch'
    ]);
    // observe is the default task
    grunt.registerTask('default', [
        'observe'
    ]);
};
