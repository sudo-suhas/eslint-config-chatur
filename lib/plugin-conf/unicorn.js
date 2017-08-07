'use strict';

module.exports = {
    // Plugin - unicorn - https://github.com/sindresorhus/eslint-plugin-unicorn
    plugins: ['unicorn'],
    rules: {
        // Enforce a specific parameter name in catch clauses.
        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/catch-error-name.md
        'unicorn/catch-error-name': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/explicit-length-check.md
        // Enforce explicitly comparing the `length` property of a value. (partly fixable)
        'unicorn/explicit-length-check': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
        // Enforce a case style for filenames.
        // 'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        'unicorn/filename-case': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-abusive-eslint-disable.md
        // Enforce specifying rules to disable in `eslint-disable` comments.
        'unicorn/no-abusive-eslint-disable': 'off',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
        // Disallow `process.exit()`.
        'unicorn/no-process-exit': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/throw-new-error.md
        // Require `new` when throwing an error.
        'unicorn/throw-new-error': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/number-literal-case.md
        // Enforce lowercase identifier and uppercase value for number literals.
        'unicorn/number-literal-case': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/escape-case.md
        // Require escape sequences to use uppercase values.
        'unicorn/escape-case': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-array-instanceof.md
        // Require `Array.isArray()` instead of `instanceof Array`.
        'unicorn/no-array-instanceof': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-new-buffer.md
        // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
        'unicorn/no-new-buffer': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-hex-escape.md
        // Enforce the use of unicode escapes instead of hexadecimal escapes.
        'unicorn/no-hex-escape': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/custom-error-definition.md
        // Enforce correct Error subclassing.
        'unicorn/custom-error-definition': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-starts-ends-with.md
        // Prefer `String#startsWith` & `String#endsWith` over more complex alternatives.
        'unicorn/prefer-starts-ends-with': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-type-error.md
        //  Enforce throwing `TypeError` in type checking conditions.
        'unicorn/prefer-type-error': 'error'

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-fn-reference-in-iterator.md
        // Prevents passing a function reference directly to iterator methods.
        // 'unicorn/no-fn-reference-in-iterator': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/new-regexp.md
        // Enforce the use of `new RegExp()` instead of `RegExp()`.
        // 'unicorn/new-regexp': 'error',

        // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/import-index.md
        // Enforce importing index files with `.`.
        // 'unicorn/import-index': 'error'
    }
};
