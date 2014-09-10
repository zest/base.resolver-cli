'use strict';
var Liftoff = require('liftoff'),
    Resolver = new Liftoff({
        name: 'soul resolver',
        moduleName: 'base.resolver',
        configName: 'soul',
        extensions: {
            '.js': null,
            '.json': null
        }
    }),
    program = require('commander').version(
            '0.0.1'
        ).option(
            '-d, --directory [base directory]',
            'The current base directory. Soul components are searched relative to this directory. If not specified, ' +
            'the component paths in the soul configuration file are assumed to be relative to the configuration file ' +
            'itself.'
        ).option(
            '-f, --file [configuration file]',
            'The soul resolver configuration file path. If this is not set, the configuration file should be in the ' +
            'current working directory and should have a name of soul.json or soul.js'
        ).option(
            '-l, --log [log level]',
            'The soul logging level. Possible values are log, info, warn, error and none'
        ),
    referDocs = function () {
        console.log();
        console.log(
            'For more information about installing and configuring base.resolver, please see the base.resolver ' +
            'documentation:'
        );
        console.log('    https://github.com/soul-infra/base.resolver/blob/master/README.md');
        console.log();
    };
program.on('--help', function(){
    console.log('resolver command is a command line interface for running base.resolver.');
    console.log('The allowed configurations are listed above.');
    referDocs();

});
program.parse(process.argv);
Resolver.launch(
    {
        cwd: program.directory,
        configPath: program.file
    },
    function (env) {
        if(!env.modulePath) {
            console.error('Fatal error: Unable to find local \'base.resolver\'.');
            console.error();
            console.error(
                'If you\'re seeing this message, base.resolver hasn\'t been installed locally to your project.'
            );
            referDocs();
            process.exit(1);
        } else if(!env.configPath) {
            console.error('Fatal error: Unable to find a local configuration.');
            console.error();
            console.error(
                'If you\'re seeing this message, you are missing a soul.json (or .js) file in your project.'
            );
            referDocs();
            process.exit(1);
        } else {
            if(program.log) {
                var path = require('path');
                require(path.join(path.dirname(env.modulePath), '../node_modules/base.logger')).configure([{
                    level: program.log
                }]);
            }
            require(env.modulePath)(env.configPath, env.cwd).then(function (resolver) {
                resolver.load().then(function () {
                    process.on('SIGINT', function() {
                        resolver.unload();
                    });
                });
            }).done();
        }
    }
);
