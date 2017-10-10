'use strict';

module.exports = {
    // Plugin - babel - https://github.com/babel/eslint-plugin-babel
    // `eslint-plugin-babel` re-implements problematic rules
    // so they do not give false positives or negatives.
    plugins: ['babel'],
    rules: {
        // http://eslint.org/docs/rules/new-cap
        // Ignores capitalized decorators (`@Decorator`)
        'babel/new-cap': [
            'error',
            // `properties` option disabled due to babel/eslint-plugin-babel#124
            { newIsCap: true, capIsNew: true /* , properties: true */ }
        ],

        // http://eslint.org/docs/rules/object-curly-spacing
        // doesn't complain about `export x from "mod";` or `export * as x from "mod"`;
        'babel/object-curly-spacing': ['warn', 'always'],

        // http://eslint.org/docs/rules/no-invalid-this
        // doesn't fail when inside class properties (`class A { a = this.b; }`)
        'babel/no-invalid-this': 'warn',

        // http://eslint.org/docs/rules/semi
        // doesn't fail when using `for await (let something of {})`. Includes class properties
        'babel/semi': ['error', 'always']
    }
};
