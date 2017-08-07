'use strict';

module.exports = {
    // Plugin - lodash - https://github.com/wix/eslint-plugin-lodash
    plugins: ['lodash'],
    'extends': ['plugin:lodash/canonical'],
    settings: {
        lodash: {
            pragma: '_',
            version: 4
        }
    },
    rules: {
        'id-length': ['warn', { exceptions: ['_'] }],

        /********************
         * Possible errors
         *******************/
        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/callback-binding.md
        // Use or avoid `thisArg` for Lodash method callbacks
        'lodash/callback-binding': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-method-value.md
        // Use value returned from collection methods properly.
        'lodash/collection-method-value': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/collection-return.md
        // Always return a value in iteratees of Lodash collection methods that aren't `forEach`.
        'lodash/collection-return': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-double-unwrap.md
        // Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`)
        'lodash/no-double-unwrap': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-extra-args.md
        // Do not use superfluous arguments on Lodash methods with a specified arity.
        'lodash/no-extra-args': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-unbound-this.md
        // Do not use `this` inside callbacks without binding them.
        'lodash/no-unbound-this': 'error',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/unwrap.md
        // Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`
        'lodash/unwrap': 'error',

        /********************
         * Stylistic issues
         *******************/
        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chain-style.md
        // Enforce a specific chain style: explicit, implicit, or explicit only when necessary.
        'lodash/chain-style': ['warn', 'as-needed'],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/chaining.md
        // Prefer a either a Lodash chain or nested Lodash calls
        'lodash/chaining': ['error', 'always', 3],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/consistent-compose.md
        // Enforce a specific function composition direction: `flow` or `flowRight`.
        'lodash/consistent-compose': 'off',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/identity-shorthand.md
        // Prefer identity shorthand syntax
        'lodash/identity-shorthand': ['error', 'always'],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/import-scope.md
        // Prefer a specific import scope (e.g. `lodash/map` vs `lodash`)
        'lodash/import-scope': 'off',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-prop-shorthand.md
        // Prefer matches property shorthand syntax
        'lodash/matches-prop-shorthand': ['error', 'always'],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/matches-shorthand.md
        // Prefer matches shorthand syntax
        'lodash/matches-shorthand': ['error', 'always'],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/no-commit.md
        // Do not use `.commit()` on chains that should end with `.value()`
        'lodash/no-commit': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/path-style.md
        // Enforce a specific path style for methods like get and property
        'lodash/path-style': ['warn', 'string'],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-compact.md
        // Prefer `_.compact` over `_.filter` for only truthy values.
        'lodash/prefer-compact': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-filter.md
        // Prefer _.filter over _.forEach with an if statement inside.
        'lodash/prefer-filter': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-flat-map.md
        // Prefer `_.flatMap` over consecutive `map` and `flatten`.
        'lodash/prefer-flat-map': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-invoke-map.md
        // Prefer using `_.invoke` over `_.map` with a method call inside.
        'lodash/prefer-invoke-map': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-map.md
        // Prefer `_.map` over `_.forEach` with a push inside.
        'lodash/prefer-map': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-reject.md
        // Prefer `_.reject` over filter with `!(expression)` or `x.prop1 !== value`
        'lodash/prefer-reject': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-thru.md
        // Prefer using `_.prototype.thru` in the chain and not call functions in the initial value
        'lodash/prefer-thru': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-wrapper-method.md
        // Prefer using array and string methods in the chain and not the initial value
        'lodash/prefer-wrapper-method': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/preferred-alias.md
        // Prefer using main method names instead of aliases.
        'lodash/preferred-alias': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prop-shorthand.md
        // Use/forbid property shorthand syntax.
        'lodash/prop-shorthand': ['error', 'always'],

        /********************
         * Preference over native
         *******************/
        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-constant.md
        // Prefer `_.constant` over functions returning literals.
        'lodash/prefer-constant': [
            'warn',
            /* check arrow functions */ true,
            /* named functions */ true
        ],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-get.md
        // Prefer using `_.get` or `_.has` over expression chains like `a && a.b && a.b.c`.
        'lodash/prefer-get': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-includes.md
        // Prefer `_.includes` over comparing `indexOf` to -1
        'lodash/prefer-includes': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-is-nil.md
        // Prefer `_.isNil` over checks for both `null` and `undefined`.
        'lodash/prefer-is-nil': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-chain.md
        // Prefer using Lodash chains (e.g. `_.map`) over native and mixed chains.
        'lodash/prefer-lodash-chain': 'off',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-method.md
        // Prefer using Lodash collection methods (e.g. `_.map`) over native array methods.
        'lodash/prefer-lodash-method': 'off',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-lodash-typecheck.md
        // Prefer using `_.is*` methods over `typeof` and `instanceof` checks when applicable.
        'lodash/prefer-lodash-typecheck': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-matches.md
        // Prefer `_.matches` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
        'lodash/prefer-matches': ['warn', 3],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-noop.md
        // Prefer `_.noop` over empty functions.
        'lodash/prefer-noop': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-over-quantifier.md
        // Prefer `_.overSome` and `_.overEvery` instead of checks with `&&` and `||`
        // for methods that have a boolean check iteratee.
        'lodash/prefer-over-quantifier': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-some.md
        // Prefer using `_.some` over comparing `findIndex` to -1.
        'lodash/prefer-some': ['warn', { includeNative: true }],

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-startswith.md
        // Prefer `_.startsWith` over `a.indexOf(b) === 0`.
        'lodash/prefer-startswith': 'warn',

        // https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-times.md
        // Prefer `_.times` over `_.map` without using the iteratee's arguments.
        'lodash/prefer-times': 'warn'
    }
};
