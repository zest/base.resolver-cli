[![Dependencies][dependencies-image]][dependencies-link]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-link]
[![Peer Dependencies][peer-dependencies-image]][peer-dependencies-link]

[![Quality][quality-image]][quality-link]
[![Build Status][build-status-image]][build-status-link]
[![License][license-image]][license-link]


# zest / base.resolver-cli

> The `base.resolver-cli` is a command line wrapper around `base.resolver`


## Usage

To install the cli, use the below command:

    npm install -g zest/base.resolver-cli

Once the cli is installed, you can run it by typing `resolver` on the console.

## Command line Options

 -  **`-h, --help`**
 
    Output usage information.


 -  **`-V, --version`**
 
    Output the version number.


 -  **`-d, --directory [base directory]`**
 
    The current base directory. zest components are searched relative to this directory. If not specified, the
    component paths in the zest configuration file are assumed to be relative to the configuration file
    itself.

 -  **`-f, --file [configuration file]`**
 
    The zest resolver configuration file path. If this is not set, the configuration file should be in the current
    working directory or in the folder hierarchy and should have a name of zest.json or zest.js

 -  **`-l, --log [log level]`**
 
    The zest logging level. Possible values are log, info, warn, error and none


For more information about installing and configuring base.resolver, please see the
[base.resolver](http://zest.github.io/base.resolver/) documentation.
   

[dependencies-image]: http://img.shields.io/david/zest/base.resolver-cli.svg?style=flat-square
[dependencies-link]: https://david-dm.org/zest/base.resolver-cli#info=dependencies&view=list
[dev-dependencies-image]: http://img.shields.io/david/dev/zest/base.resolver-cli.svg?style=flat-square
[dev-dependencies-link]: https://david-dm.org/zest/base.resolver-cli#info=devDependencies&view=list
[peer-dependencies-image]: http://img.shields.io/david/peer/zest/base.resolver-cli.svg?style=flat-square
[peer-dependencies-link]: https://david-dm.org/zest/base.resolver-cli#info=peerDependencies&view=list
[license-image]: http://img.shields.io/badge/license-UNLICENSE-brightgreen.svg?style=flat-square
[license-link]: http://unlicense.org
[quality-image]: http://img.shields.io/codeclimate/github/zest/base.resolver-cli.svg?style=flat-square
[quality-link]: https://codeclimate.com/github/zest/base.resolver-cli
[build-status-image]: http://img.shields.io/travis/zest/base.resolver-cli.svg?style=flat-square
[build-status-link]: https://travis-ci.org/zest/base.resolver-cli