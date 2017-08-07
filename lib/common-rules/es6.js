'use strict';

module.exports = {
    // http://eslint.org/docs/rules/arrow-body-style
    // require braces around arrow function bodies
    'arrow-body-style': ['error', 'as-needed'],

    // http://eslint.org/docs/rules/arrow-parens
    // require parentheses around arrow function arguments
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],

    // http://eslint.org/docs/rules/arrow-spacing
    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': ['warn', { before: true, after: true }],

    // http://eslint.org/docs/rules/constructor-super
    // require `super()` calls in constructors
    'constructor-super': 'error',

    // http://eslint.org/docs/rules/generator-star-spacing
    // enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': ['warn', { before: false, after: true }],

    // http://eslint.org/docs/rules/no-class-assign
    // disallow reassigning class members
    'no-class-assign': 'error',

    // http://eslint.org/docs/rules/no-confusing-arrow
    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': ['error', { allowParens: true }],

    // http://eslint.org/docs/rules/no-const-assign
    // disallow reassigning `const` variables
    'no-const-assign': 'error',

    // http://eslint.org/docs/rules/no-dupe-class-members
    // disallow duplicate class members
    'no-dupe-class-members': 'error',

    // http://eslint.org/docs/rules/no-duplicate-imports
    // disallow duplicate module imports
    'no-duplicate-imports': ['error', { includeExports: true }],

    // http://eslint.org/docs/rules/no-new-symbol
    // disallow `new` operators with the `Symbol` object
    'no-new-symbol': 'error',

    // http://eslint.org/docs/rules/no-this-before-super
    // disallow `this`/`super` before calling `super()` in constructors
    'no-this-before-super': 'error',

    // http://eslint.org/docs/rules/no-useless-computed-key
    // disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',

    // http://eslint.org/docs/rules/no-useless-constructor
    // disallow unnecessary constructors
    'no-useless-constructor': 'error',

    // http://eslint.org/docs/rules/no-useless-rename
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'error',

    // http://eslint.org/docs/rules/no-var
    // require `let` or `const` instead of `var`
    'no-var': 'error',

    // http://eslint.org/docs/rules/object-shorthand
    // require or disallow method and property shorthand syntax for object literals
    'object-shorthand': [
        'error',
        'always',
        { avoidExplicitReturnArrows: true }
    ],

    // http://eslint.org/docs/rules/prefer-arrow-callback
    // require arrow functions as callbacks
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],

    // http://eslint.org/docs/rules/prefer-const
    // require `const` declarations for variables that are never reassigned after declared
    'prefer-const': ['error', { destructuring: 'all' }],

    // http://eslint.org/docs/rules/prefer-destructuring
    // require destructuring from arrays and/or objects
    'prefer-destructuring': ['warn', { array: true, object: true }],

    // http://eslint.org/docs/rules/prefer-rest-params
    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // http://eslint.org/docs/rules/prefer-spread
    // require spread operators instead of `.apply()`
    'prefer-spread': 'warn',

    // http://eslint.org/docs/rules/prefer-template
    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // http://eslint.org/docs/rules/require-yield
    // require generator functions to contain `yield`
    'require-yield': 'error',

    // http://eslint.org/docs/rules/rest-spread-spacing
    // enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': ['warn', 'never'],

    // http://eslint.org/docs/rules/template-curly-spacing
    // require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': ['warn', 'never'],

    // require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': ['warn', { before: false, after: true }]
};
