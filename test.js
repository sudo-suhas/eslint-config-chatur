'use strict';

const util = require('./lib/util');

const rules = {
    /********************
     * Strict Mode
     *******************/
    // http://eslint.org/docs/rules/strict
    // require or disallow strict mode directives
    strict: 'error',

    /********************
     * Node.js and CommonJS
     *******************/
    // http://eslint.org/docs/rules/no-buffer-constructor
    // disallow use of the `Buffer()` constructor
    'no-buffer-constructor': 'error',

    // http://eslint.org/docs/rules/no-path-concat
    // disallow string concatenation with `__dirname` and `__filename`
    'no-path-concat': 'error',

    // http://eslint.org/docs/rules/no-process-env
    // disallow the use of `process.env`
    'no-process-env': 'error',

    // disallow the use of `process.exit()`
    // http://eslint.org/docs/rules/no-process-exit
    // delegate to `unicorn/no-process-exit`
    'no-process-exit': 'off'
};

const avaInstalled = util.isInstalled('ava');

if (avaInstalled || util.isInstalled('jest')) {
    rules['node/no-unsupported-features'] = [
        'error',
        { version: 8, ignores: ['modules'] }
    ];
}

if (util.isInstalled('lodash') && avaInstalled) {
    rules['id-length'] = ['warn', { exceptions: ['t', '_'] }];
}

module.exports = util.generateConfig(
    {
        env: {
            es6: true,
            node: true,
            builtin: true
        },
        rules
    },
    ['eslint-comments', 'node', 'unicorn'],
    ['promise', 'lodash', 'prettier', 'jest', 'ava']
);
