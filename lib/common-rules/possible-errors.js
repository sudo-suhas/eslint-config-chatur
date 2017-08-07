'use strict';

module.exports = {
    // http://eslint.org/docs/rules/for-direction
    // enforce "for" loop update clause moving the counter in the right direction.
    'for-direction': 'error',

    // http://eslint.org/docs/rules/getter-return
    // enforce `return` statements in getters
    // `allowImplicit` allows implicitly returning undefined with a `return;` statement.
    'getter-return': ['error', { allowImplicit: true }],

    // http://eslint.org/docs/rules/no-await-in-loop
    // disallow `await` inside of loops
    'no-await-in-loop': 'error',

    // http://eslint.org/docs/rules/no-compare-neg-zero
    // disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // http://eslint.org/docs/rules/no-cond-assign
    // disallow assignment operators in conditional expressions
    'no-cond-assign': 'error',

    // http://eslint.org/docs/rules/no-console
    // disallow the use of `console`
    'no-console': 'off',

    // http://eslint.org/docs/rules/no-constant-condition
    // disallow constant expressions in conditions
    'no-constant-condition': ['error', { checkLoops: false }],

    // http://eslint.org/docs/rules/no-control-regex
    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // http://eslint.org/docs/rules/no-debugger
    // disallow the use of `debugger`
    'no-debugger': 'error',

    // http://eslint.org/docs/rules/no-dupe-args
    // disallow duplicate arguments in `function` definitions
    'no-dupe-args': 'error',

    // http://eslint.org/docs/rules/no-dupe-keys
    // disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // http://eslint.org/docs/rules/no-duplicate-case
    // disallow duplicate case labels
    'no-duplicate-case': 'error',

    // http://eslint.org/docs/rules/no-empty
    // disallow empty block statements
    'no-empty': ['error', { allowEmptyCatch: true }],

    // http://eslint.org/docs/rules/no-empty-character-class
    // disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // http://eslint.org/docs/rules/no-ex-assign
    // disallow reassigning exceptions in `catch` clauses
    'no-ex-assign': 'error',

    // http://eslint.org/docs/rules/no-extra-boolean-cast
    // disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',

    // http://eslint.org/docs/rules/no-extra-parens
    // disallow unnecessary parentheses
    'no-extra-parens': [
        'warn',
        'all',
        {
            conditionalAssign: false,
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false
        }
    ],

    // http://eslint.org/docs/rules/no-extra-semi
    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // http://eslint.org/docs/rules/no-func-assign
    // disallow reassigning `function` declarations
    'no-func-assign': 'error',

    // disallow variable or `function` declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': ['error', 'both'],

    // http://eslint.org/docs/rules/no-invalid-regexp
    // disallow invalid regular expression strings in `RegExp` constructors
    'no-invalid-regexp': 'error',

    // http://eslint.org/docs/rules/no-irregular-whitespace
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': [
        'error',
        {
            skipComments: true,
            skipRegExps: true,
            skipTemplates: true
        }
    ],

    // http://eslint.org/docs/rules/no-obj-calls
    // disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // http://eslint.org/docs/rules/no-prototype-builtins
    // disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': 'off',

    // http://eslint.org/docs/rules/no-regex-spaces
    // disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',

    // http://eslint.org/docs/rules/no-sparse-arrays
    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // http://eslint.org/docs/rules/no-template-curly-in-string
    // disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // http://eslint.org/docs/rules/no-unexpected-multiline
    // disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',

    // http://eslint.org/docs/rules/no-unreachable
    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    'no-unreachable': 'error',

    // http://eslint.org/docs/rules/no-unsafe-finally
    // disallow control flow statements in `finally` blocks
    'no-unsafe-finally': 'error',

    // http://eslint.org/docs/rules/no-unsafe-negation
    // disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // http://eslint.org/docs/rules/use-isnan
    // require calls to `isNaN()` when checking for `NaN`
    'use-isnan': 'error',

    // http://eslint.org/docs/rules/valid-jsdoc
    // enforce valid JSDoc comments
    'valid-jsdoc': [
        'warn',
        {
            prefer: {
                arg: 'param',
                argument: 'param',
                class: 'constructor',
                return: 'returns',
                virtual: 'abstract'
            },
            preferType: {
                Boolean: 'boolean',
                Number: 'number',
                object: 'Object',
                String: 'string'
            },
            requireReturn: false,
            requireParamDescription: false,
            requireReturnDescription: false
        }
    ],

    // http://eslint.org/docs/rules/valid-typeof
    // enforce comparing typeof expressions against valid strings
    'valid-typeof': 'error'
};
