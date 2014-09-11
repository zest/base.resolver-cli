[![Dependencies][dependencies-image]][dependencies-link]
[![Dev Dependencies][dev-dependencies-image]][dev-dependencies-link]
[![Peer Dependencies][peer-dependencies-image]][peer-dependencies-link]

[![Quality][quality-image]][quality-link]
[![Build Status][build-status-image]][build-status-link]
[![License][license-image]][license-link]


# soul-infra / base.resolver-cli

> The `base.resolver-cli` is a command line wrapper around `base.resolver`


## Usage

To install the cli, use the below command:

    npm install -g soul-infra/base.resolver-cli

Once the cli is installed, you can run it by typing `resolver` on the console.

## Command line Options

 -  **`-h, --help`**
 
    Output usage information.


 -  **`-V, --version`**
 
    Output the version number.


 -  **`-d, --directory [base directory]`**
 
    The current base directory. Soul components are searched relative to this directory. If not specified, the
    component paths in the soul configuration file are assumed to be relative to the configuration file
    itself.

 -  **`-f, --file [configuration file]`**
 
    The soul resolver configuration file path. If this is not set, the configuration file should be in the current
    working directory or in the folder hierarchy and should have a name of soul.json or soul.js

 -  **`-l, --log [log level]`**
 
    The soul logging level. Possible values are log, info, warn, error and none


For more information about installing and configuring base.resolver, please see the
[base.resolver](https://github.com/soul-infra/base.resolver/blob/master/README.md) documentation.
   

[dependencies-image]: http://img.shields.io/david/soul-infra/base.resolver-cli.svg?style=flat-square
[dependencies-link]: https://david-dm.org/soul-infra/base.resolver-cli#info=dependencies&view=list
[dev-dependencies-image]: http://img.shields.io/david/dev/soul-infra/base.resolver-cli.svg?style=flat-square
[dev-dependencies-link]: https://david-dm.org/soul-infra/base.resolver-cli#info=devDependencies&view=list
[peer-dependencies-image]: http://img.shields.io/david/peer/soul-infra/base.resolver-cli.svg?style=flat-square
[peer-dependencies-link]: https://david-dm.org/soul-infra/base.resolver-cli#info=peerDependencies&view=list
[license-image]: http://img.shields.io/badge/license-UNLICENSE-brightgreen.svg?style=flat-square
[license-link]: http://unlicense.org
[quality-image]: http://img.shields.io/codeclimate/github/soul-infra/base.resolver-cli.svg?style=flat-square
[quality-link]: https://codeclimate.com/github/soul-infra/base.resolver-cli
[build-status-image]: http://img.shields.io/travis/soul-infra/base.resolver-cli.svg?style=flat-square
[build-status-link]: https://travis-ci.org/soul-infra/base.resolver-cli