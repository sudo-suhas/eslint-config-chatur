'use strict';

module.exports = {
    // Plugin - import - https://github.com/benmosher/eslint-plugin-import
    // Might need to configure settings, resolver for browser
    // https://github.com/benmosher/eslint-plugin-import#settings
    plugins: ['import'],
    rules: {
        /********************
         * Static analysis
         *******************/
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        // Ensure imports point to a file/module that can be resolved.
        'import/no-unresolved': [
            'error',
            { commonjs: true, caseSensitive: true }
        ],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        // Ensure named imports correspond to a named export in the remote file.
        'import/named': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        // Ensure a default export is present, given a default import.
        'import/default': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        'import/namespace': ['error', { allowComputed: true }],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
        // Forbid import of modules using absolute paths
        'import/no-absolute-path': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        // Forbid import of modules using absolute paths
        'import/no-dynamic-require': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
        // Forbid Webpack loader syntax in imports
        'import/no-webpack-loader-syntax': 'warn',

        /********************
         * Helpful warnings
         *******************/
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        // Report any invalid exports, i.e. re-export of the same name
        'import/export': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
        // Report use of exported name as identifier of default export
        'import/no-named-as-default': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        // Report use of exported name as property of default export
        'import/no-named-as-default-member': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
        // Report imported names marked with `@deprecated` documentation tag
        'import/no-deprecated': 'warn',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // Forbid the use of extraneous packages
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
        // Forbid the use of mutable exports with `var` or `let`.
        'import/no-mutable-exports': 'error',

        /********************
         * Module systems
         *******************/
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
        // Report potentially ambiguous parse goal.
        'import/unambiguous': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
        // Report CommonJS `require` calls and `module.exports` or `exports.*`.
        'import/no-commonjs': ['error', 'allow-primitive-modules'],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
        // Report AMD `require` and `define` calls.
        'import/no-amd': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
        // No Node.js builtin modules.
        'import/no-nodejs-modules': 'error',

        /********************
         * Style guide
         *******************/
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
        // Ensure all imports appear before other statements
        'import/first': ['error', 'absolute-first'],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        // Enforce a convention in module import order
        'import/order': [
            'warn',
            { groups: ['builtin', 'external', 'parent', ['sibling', 'index']] }
        ],

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
        // Enforce a newline after import statements
        'import/newline-after-import': 'warn',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        // Prefer a default export if module exports a single name
        'import/prefer-default-export': 'warn',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
        // Forbid named default exports
        'import/no-named-default': 'error'
    }
};
