'use strict';

module.exports = {
    // http://eslint.org/docs/rules/no-delete-var
    // disallow deleting variables
    'no-delete-var': 'error',

    // http://eslint.org/docs/rules/no-shadow
    // disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': [
        'error',
        { builtinGlobals: true, allow: ['resolve', 'reject', 'done', 'cb'] }
    ],

    // http://eslint.org/docs/rules/no-shadow-restricted-names
    // disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // http://eslint.org/docs/rules/no-undef
    // disallow the use of undeclared variables unless mentioned in `/* global */` comments
    'no-undef': ['error', { typeof: true }],

    // http://eslint.org/docs/rules/no-undef-init
    // disallow initializing variables to `undefined`
    'no-undef-init': 'error',

    // http://eslint.org/docs/rules/no-undefined
    // disallow the use of `undefined` as an identifier
    'no-undefined': 'off', // no-global-assign + no-shadow-restricted-names

    // http://eslint.org/docs/rules/no-unused-vars
    // disallow unused variables
    'no-unused-vars': [
        'error',
        {
            args: 'after-used', // default but future proof
            varsIgnorePattern: '[iI]gnore',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '[iI]gnore',
            argsIgnorePattern: '^_|next',
            ignoreRestSiblings: true
        }
    ],

    // http://eslint.org/docs/rules/no-use-before-define
    // disallow the use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true }]
};
