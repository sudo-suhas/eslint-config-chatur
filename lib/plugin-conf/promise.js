'use strict';

module.exports = {
    // Plugin - promise - https://github.com/xjamundx/eslint-plugin-promise
    plugins: ['promise'],
    // extends: ['plugin:promise/recommended'],
    rules: {
        // Plugin - Promise
        // https://github.com/xjamundx/eslint-plugin-promise#rule-catch-or-return
        // Enforces the use of `catch()` on un-returned promises.
        'promise/catch-or-return': [
            'error',
            { terminationMethod: ['catch', 'finally'] }
        ],

        // https://github.com/xjamundx/eslint-plugin-promise#rule-always-return
        // Return inside each `then()` to create readable and reusable Promise chains.
        'promise/always-return': 'error',

        // https://github.com/xjamundx/eslint-plugin-promise#param-names
        // Enforce consistent param names when creating new promises.
        'promise/param-names': 'warn',

        // https://github.com/xjamundx/eslint-plugin-promise#no-native
        // In an ES5 environment, make sure to create a `Promise` constructor before using.
        'promise/no-native': 'off',

        // https://github.com/xjamundx/eslint-plugin-promise#rule-no-return-wrap
        // Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
        'promise/no-return-wrap': ['error', { allowReject: true }],

        // https://github.com/xjamundx/eslint-plugin-promise#rule-no-return-in-finally
        // Disallow return statements inside a callback passed to finally(), since nothing
        // would consume what's returned.
        'promise/no-return-in-finally': 'error',

        // Avoid nested `then()` or `catch()` statements
        'promise/no-nesting': 'warn',

        // Avoid using promises inside of callbacks
        'promise/no-promise-in-callback': 'warn',

        // Avoid calling `cb()` inside of a `then()`
        'promise/no-callback-in-promise': 'warn',

        // Avoid creating `new` promises outside of utility libs
        'promise/avoid-new': 'warn',

        // Prefer `await` to `then()` for reading Promise values
        'promise/prefer-await-to-then': 'off',

        // Prefer `async`/`await` to the callback pattern
        'promise/prefer-await-to-callbacks': 'off'
    }
};
