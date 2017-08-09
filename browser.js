'use strict';

const { isInstalled, generateConfig } = require('./lib/util');

const exceptions = ['h', 'x', 'y', 'r'];

const nodeJsModules = [
    'error',
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'dgram',
    'dns',
    'domain',
    'events',
    'freelist',
    'fs',
    'http',
    'https',
    'module',
    'net',
    'os',
    'path',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'smalloc',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tracing',
    'tty',
    'url',
    'util',
    'vm',
    'zlib'
];

const rules = {
    /********************
     * Best Practices
     *******************/
    // http://eslint.org/docs/rules/no-alert
    // disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': 'error',

    // http://eslint.org/docs/rules/no-script-url
    // disallow `javascript:` urls
    'no-script-url': 'error',

    /********************
     * Variables
     *******************/
    // http://eslint.org/docs/rules/no-catch-shadow
    // disallow `catch` clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 'error', // relevant for IE8 only but ¯\_(ツ)_/¯

    // http://eslint.org/docs/rules/no-restricted-modules
    // disallow specified modules when loaded by `require`
    'no-restricted-modules': nodeJsModules,

    /********************
     * Stylistic Issues
     *******************/
    // http://eslint.org/docs/rules/id-length
    // enforce minimum and maximum identifier lengths
    'id-length': ['warn', { exceptions }],

    // http://eslint.org/docs/rules/max-lines
    // enforce a maximum number of lines per file
    'max-lines': 'off',

    /********************
     * ECMAScript 6
     *******************/
    // http://eslint.org/docs/rules/no-restricted-imports
    // disallow specified modules when loaded by `import`
    'no-restricted-imports': nodeJsModules
};

if (isInstalled('lodash')) {
    exceptions.push('_');

    if (isInstalled(`eslint-plugin-lodash`)) {
        Object.assign(rules, {
            // It is recommended to use https://github.com/lodash/lodash-webpack-plugin
            // if `lodash` is being used in the browser. Disabling rules which would conflict.

            /********************
             * Stylistic issues
             *******************/
            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md
            // Prefer a either a Lodash chain or nested Lodash calls
            'lodash/chaining': ['error', 'never'],

            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/identity-shorthand.md
            // Prefer identity shorthand syntax
            'lodash/identity-shorthand': ['error', 'never'],

            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md
            // Prefer matches property shorthand syntax
            'lodash/matches-prop-shorthand': ['error', 'never'],

            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-shorthand.md
            // Prefer matches shorthand syntax
            'lodash/matches-shorthand': ['error', 'never'],

            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md
            // Use/forbid property shorthand syntax.
            'lodash/prop-shorthand': ['error', 'never'],

            /********************
             * Preference over native
             *******************/
            // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-matches.md
            // Prefer `_.matches` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
            'lodash/prefer-matches': 'off'
        });
    }
}

module.exports = generateConfig(
    {
        env: {
            es6: true,
            node: false,
            browser: true,
            commonjs: true
        },
        parserOptions: {
            parser: 'babel-eslint',
            ecmaVersion: 8,
            sourceType: 'module',
            ecmaFeatures: {
                arrowFunctions: true,
                experimentalObjectRestSpread: false
            }
        },
        rules
    },
    ['eslint-comments', 'unicorn'],
    // TODO: Configure rules for plugin mysticatea/vue-eslint-parser
    ['promise', 'lodash', 'prettier', 'compat', 'import']
);
