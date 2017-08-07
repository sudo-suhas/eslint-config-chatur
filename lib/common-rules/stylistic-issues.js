'use strict';

module.exports = {
    // http://eslint.org/docs/rules/array-bracket-spacing
    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['warn', 'never'],

    // http://eslint.org/docs/rules/block-spacing
    // enforce consistent spacing inside single-line blocks
    'block-spacing': 'warn',

    // http://eslint.org/docs/rules/brace-style
    // enforce consistent brace style for blocks
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],

    // http://eslint.org/docs/rules/camelcase
    // enforce camelcase naming convention
    camelcase: ['warn', { properties: 'never' }],

    // http://eslint.org/docs/rules/comma-spacing
    // enforce consistent spacing before and after commas
    'comma-spacing': ['warn', { before: false, after: true }],

    // http://eslint.org/docs/rules/comma-style
    // enforce consistent comma style
    'comma-style': ['warn', 'last'],

    // http://eslint.org/docs/rules/comma-dangle
    // require or disallow trailing commas
    'comma-dangle': ['error', 'never'],

    // http://eslint.org/docs/rules/computed-property-spacing
    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['warn', 'never'],

    // http://eslint.org/docs/rules/consistent-this
    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'self'],

    // http://eslint.org/docs/rules/eol-last
    // require or disallow newline at the end of files
    'eol-last': ['warn', 'always'],

    // http://eslint.org/docs/rules/func-call-spacing
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['warn', 'never'],

    // http://eslint.org/docs/rules/func-name-matching
    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': ['error', 'always'],

    // http://eslint.org/docs/rules/func-names
    // require or disallow named `function` expressions
    'func-names': 'error',

    // http://eslint.org/docs/rules/func-style
    // enforce the consistent use of either `function` declarations or expressions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // http://eslint.org/docs/rules/id-length
    // enforce minimum and maximum identifier lengths
    'id-length': 'warn',

    // http://eslint.org/docs/rules/indent
    // enforce consistent indentation
    indent: ['warn', 4, { VariableDeclarator: 1, SwitchCase: 1 }],

    // http://eslint.org/docs/rules/key-spacing
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [
        'warn',
        { beforeColon: false, afterColon: true, mode: 'strict' }
    ],

    // http://eslint.org/docs/rules/keyword-spacing
    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['warn', { before: true, after: true }],

    // http://eslint.org/docs/rules/linebreak-style
    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // http://eslint.org/docs/rules/max-depth
    // enforce a maximum depth that blocks can be nested
    'max-depth': ['error', 5],

    // http://eslint.org/docs/rules/max-len
    // enforce a maximum line length
    'max-len': ['error', { code: 120, comments: 140, ignoreUrls: true }],

    // http://eslint.org/docs/rules/max-lines
    // enforce a maximum number of lines per file
    'max-lines': [
        'error',
        { max: 300, skipBlankLines: true, skipComments: true }
    ],

    // http://eslint.org/docs/rules/max-nested-callbacks
    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': ['error', 5],

    // http://eslint.org/docs/rules/max-params
    // enforce a maximum number of parameters in function definitions
    'max-params': ['error', 6],

    // http://eslint.org/docs/rules/max-statements
    // enforce a maximum number of statements allowed in function blocks
    'max-statements': ['warn', 30],

    // http://eslint.org/docs/rules/max-statements-per-line
    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': ['error', { max: 1 }],

    // http://eslint.org/docs/rules/new-cap
    // require constructor names to begin with a capital letter
    'new-cap': ['error', { newIsCap: true, capIsNew: true, properties: true }],

    // http://eslint.org/docs/rules/new-parens
    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // http://eslint.org/docs/rules/newline-per-chained-call
    // require a newline after each call in a method chain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

    // http://eslint.org/docs/rules/no-array-constructor
    // disallow `Array` constructors
    'no-array-constructor': 'error',

    // http://eslint.org/docs/rules/no-bitwise
    // disallow bitwise operators
    'no-bitwise': ['error', { int32Hint: true }],

    // http://eslint.org/docs/rules/no-lonely-if
    // disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 'warn',

    // http://eslint.org/docs/rules/no-mixed-operators
    // disallow mixed binary operators
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],

    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // http://eslint.org/docs/rules/no-multiple-empty-lines
    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // http://eslint.org/docs/rules/no-nested-ternary
    // disallow nested ternary expressions
    'no-nested-ternary': 'warn',

    // http://eslint.org/docs/rules/no-new-object
    // disallow `Object` constructors
    'no-new-object': 'error',

    // http://eslint.org/docs/rules/no-trailing-spaces
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'warn',

    // http://eslint.org/docs/rules/no-unneeded-ternary
    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // http://eslint.org/docs/rules/no-whitespace-before-property
    // disallow whitespace before properties
    'no-whitespace-before-property': 'warn',

    // http://eslint.org/docs/rules/nonblock-statement-body-position
    // enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside'],

    // http://eslint.org/docs/rules/object-curly-newline
    // enforce consistent line breaks inside braces
    'object-curly-newline': ['warn', { consistent: true }],

    // http://eslint.org/docs/rules/object-curly-spacing
    // enforce consistent spacing inside braces
    'object-curly-spacing': ['warn', 'always'],

    // http://eslint.org/docs/rules/operator-assignment
    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['warn', 'always'],

    // http://eslint.org/docs/rules/operator-linebreak
    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'after'],

    // http://eslint.org/docs/rules/quote-props
    // require quotes around object literal property names
    'quote-props': ['warn', 'as-needed', { keywords: true, numbers: true }],

    // http://eslint.org/docs/rules/quotes
    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['warn', 'single', { avoidEscape: true }],

    // http://eslint.org/docs/rules/require-jsdoc
    // require JSDoc comments
    'require-jsdoc': [
        'warn',
        {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true
            }
        }
    ],

    // http://eslint.org/docs/rules/semi
    // require or disallow semicolons instead of ASI
    semi: ['error', 'always'],

    // http://eslint.org/docs/rules/semi-spacing
    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['warn', { before: false, after: true }],

    // http://eslint.org/docs/rules/semi-style
    // enforce location of semicolons
    'semi-style': ['error', 'last'],

    // http://eslint.org/docs/rules/space-before-blocks
    // enforce consistent spacing before blocks
    'space-before-blocks': 'warn',

    // http://eslint.org/docs/rules/space-before-function-paren
    // enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': [
        'warn',
        { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],

    // http://eslint.org/docs/rules/space-in-parens
    // enforce consistent spacing inside parentheses
    'space-in-parens': ['warn', 'never'],

    // http://eslint.org/docs/rules/space-infix-ops
    // require spacing around infix operators
    'space-infix-ops': ['error', { int32Hint: true }],

    // http://eslint.org/docs/rules/space-unary-ops
    // enforce consistent spacing before or after unary operators
    'space-unary-ops': ['warn', { words: true, nonwords: false }],

    // http://eslint.org/docs/rules/spaced-comment
    // enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': ['warn', 'always', { exceptions: ['-+', '-', '**'] }],

    // http://eslint.org/docs/rules/switch-colon-spacing
    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // http://eslint.org/docs/rules/template-tag-spacing
    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['warn', 'never']
};
