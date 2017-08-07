'use strict';

module.exports = {
    // Plugin - node - https://github.com/mysticatea/eslint-plugin-node
    plugins: ['node'],
    'extends': ['plugin:node/recommended'],
    rules: {
        /********************
         * Possible Errors
         *******************/
        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
        // disallow `import` declarations of extraneous packages
        'node/no-extraneous-import': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
        // disallow `require()` expressions of extraneous packages
        'node/no-extraneous-require': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
        // disallow `import` declarations of missing files
        'node/no-missing-import': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
        // disallow `require()` expressions of missing files
        'node/no-missing-require': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
        // disallow 'bin' files which are ignored by npm
        'node/no-unpublished-bin': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
        // disallow `import` declarations of private things
        'node/no-unpublished-import': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
        // disallow `require()` expressions of private things
        'node/no-unpublished-require': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
        // disallow unsupported ECMAScript features on the specified version
        'node/no-unsupported-features': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
        // make `process.exit()` expressions the same code path as throw
        'node/process-exit-as-throw': 'error',

        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
        // enforce the correct usage of shebang
        'node/shebang': 'error',

        /********************
         * Best Practices
         *******************/
        // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
        // disallow deprecated APIs
        'node/no-deprecated-api': 'error'
    }
};
