'use strict';

module.exports = {
    // http://eslint.org/docs/rules/accessor-pairs
    // enforce getter and setter pairs in objects
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],

    // http://eslint.org/docs/rules/array-callback-return
    // enforce `return` statements in callbacks of array methods
    'array-callback-return': 'error',

    // http://eslint.org/docs/rules/block-scoped-var
    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // http://eslint.org/docs/rules/class-methods-use-this
    // enforce that class methods utilize `this`
    'class-methods-use-this': 'error',

    // http://eslint.org/docs/rules/complexity
    // enforce a maximum cyclomatic complexity allowed in a program
    complexity: 'error',

    // http://eslint.org/docs/rules/consistent-return
    // require `return` statements to either always or never specify values
    'consistent-return': 'error',

    // http://eslint.org/docs/rules/curly
    // enforce consistent brace style for all control statements
    curly: ['error', 'multi-line', 'consistent'],

    // http://eslint.org/docs/rules/default-case
    // require `default` cases in `switch` statements
    'default-case': ['warn'],

    // http://eslint.org/docs/rules/dot-location
    // enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // http://eslint.org/docs/rules/dot-notation
    // enforce dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // http://eslint.org/docs/rules/eqeqeq
    // require the use of `===` and `!==`
    eqeqeq: ['warn', 'smart'],

    // http://eslint.org/docs/rules/guard-for-in
    // require `for-in` loops to include an `if` statement
    'guard-for-in': 'error',

    // http://eslint.org/docs/rules/no-caller
    // disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'error',

    // http://eslint.org/docs/rules/no-case-declarations
    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // http://eslint.org/docs/rules/no-else-return
    // disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': 'error',

    // http://eslint.org/docs/rules/no-empty-function
    // disallow empty functions
    'no-empty-function': 'error',

    // http://eslint.org/docs/rules/no-empty-pattern
    // disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // http://eslint.org/docs/rules/no-eq-null
    // disallow `null` comparisons without type-checking operators
    'no-eq-null': 'off', // `a == null` is quite useful

    // http://eslint.org/docs/rules/no-eval
    // disallow the use of `eval()`
    'no-eval': 'error',

    // http://eslint.org/docs/rules/no-extend-native
    // disallow extending native types
    'no-extend-native': 'warn',

    // http://eslint.org/docs/rules/no-extra-bind
    // disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'error',

    // http://eslint.org/docs/rules/no-extra-label
    // disallow unnecessary labels
    'no-extra-label': 'off', // no need, `no-labels` should take care of it

    // http://eslint.org/docs/rules/no-fallthrough
    // disallow fallthrough of `case` statements
    'no-fallthrough': 'error',

    // http://eslint.org/docs/rules/no-floating-decimal
    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // http://eslint.org/docs/rules/no-global-assign
    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',

    // http://eslint.org/docs/rules/no-implicit-coercion
    // disallow shorthand type conversions
    'no-implicit-coercion': ['error', { string: false, allow: ['!!'] }],

    // http://eslint.org/docs/rules/no-implied-eval
    // disallow the use of `eval()`-like methods
    'no-implied-eval': 'error',

    // http://eslint.org/docs/rules/no-invalid-this
    // disallow `this` keywords outside of classes or class-like objects
    'no-invalid-this': 'warn',

    // http://eslint.org/docs/rules/no-iterator
    // disallow the use of the `__iterator__` property
    'no-iterator': 'error', // probably not required but ¯\_(ツ)_/¯

    // http://eslint.org/docs/rules/no-labels
    // disallow labeled statements
    'no-labels': 'error',

    // http://eslint.org/docs/rules/no-lone-blocks
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // http://eslint.org/docs/rules/no-loop-func
    // disallow `function` declarations and expressions inside loop statements
    'no-loop-func': 'error',

    // http://eslint.org/docs/rules/no-multi-spaces
    // disallow multiple spaces
    'no-multi-spaces': 'error',

    // http://eslint.org/docs/rules/no-multi-str
    // disallow multiline strings
    'no-multi-str': 'error',

    // http://eslint.org/docs/rules/no-new
    // disallow `new` operators outside of assignments or comparisons
    'no-new': 'error',

    // http://eslint.org/docs/rules/no-new-func
    // disallow `new` operators with the `Function` object
    'no-new-func': 'error',

    // http://eslint.org/docs/rules/no-new-wrappers
    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'error',

    // http://eslint.org/docs/rules/no-octal
    // disallow octal literals
    'no-octal': 'error',

    // http://eslint.org/docs/rules/no-octal-escape
    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // http://eslint.org/docs/rules/
    // disallow reassigning `function` parameters
    'no-param-reassign': 'error',

    // http://eslint.org/docs/rules/no-proto
    // disallow the use of the __proto__ property
    'no-proto': 'error',

    // http://eslint.org/docs/rules/no-redeclare
    // disallow variable redeclaration
    'no-redeclare': ['error', { builtinGlobals: true }],

    // http://eslint.org/docs/rules/no-return-assign
    // disallow assignment operators in `return` statements
    'no-return-assign': 'error',

    // http://eslint.org/docs/rules/no-return-await
    // disallow unnecessary `return await`
    'no-return-await': 'error',

    // http://eslint.org/docs/rules/no-self-assign
    // disallow assignments where both sides are exactly the same
    'no-self-assign': ['error', { props: true }],

    // http://eslint.org/docs/rules/no-self-compare
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // http://eslint.org/docs/rules/no-sequences
    // disallow comma operators
    'no-sequences': 'error',

    // http://eslint.org/docs/rules/no-throw-literal
    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'error',

    // http://eslint.org/docs/rules/no-unused-expressions
    // disallow unused expressions
    'no-unused-expressions': ['error', { allowShortCircuit: true }],

    // http://eslint.org/docs/rules/no-unused-labels
    // disallow unused labels
    'no-unused-label': 'off', // no need, `no-labels` should take care of it

    // http://eslint.org/docs/rules/no-useless-call
    // disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'error',

    // http://eslint.org/docs/rules/no-useless-concat
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // http://eslint.org/docs/rules/no-useless-escape
    // disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // http://eslint.org/docs/rules/no-useless-return
    // disallow redundant return statements
    'no-useless-return': 'error',

    // http://eslint.org/docs/rules/no-void
    // disallow `void` operators
    'no-void': 'error', // useful for prior ES5

    // http://eslint.org/docs/rules/no-warning-comments
    // disallow specified warning terms in comments
    'no-warning-comments': 'warn',

    // http://eslint.org/docs/rules/no-with
    // disallow `with` statements
    'no-with': 'error',

    // http://eslint.org/docs/rules/prefer-promise-reject-errors
    // require using `Error` objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'error',

    // http://eslint.org/docs/rules/radix
    // enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'off', // relevant prior to ES5

    // http://eslint.org/docs/rules/require-await
    // disallow async functions which have no `await` expression
    'require-await': 'error',

    // http://eslint.org/docs/rules/wrap-iife
    // require parentheses around immediate `function` invocations
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: true }],

    // require or disallow “Yoda” conditions
    yoda: ['error', 'never', { exceptRange: true }]
};
