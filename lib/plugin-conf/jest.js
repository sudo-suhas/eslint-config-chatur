'use strict';

module.exports = {
    // Plugin - jest - https://github.com/jest-community/eslint-plugin-jest
    env: {
        jest: true,
        'jest/globals': true
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            experimentalObjectRestSpread: false
        }
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    rules: {
        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
        // Suggest using `toBeNull()`
        'jest/prefer-to-be-null': 'warn',

        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
        // Suggest using `toBeUndefined()`
        'jest/prefer-to-be-undefined': 'warn',

        // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
        // Enforce having return statement when testing with promises
        'jest/valid-expect-in-promise': 'error'
    }
};
