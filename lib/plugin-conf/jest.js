'use strict';

module.exports = {
    // Plugin - jest - https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest
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
    extends: ['plugin:jest/recommended']
};
