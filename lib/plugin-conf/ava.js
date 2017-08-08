'use strict';

module.exports = {
    // Plugin - ava - https://github.com/avajs/eslint-plugin-ava
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            experimentalObjectRestSpread: false
        }
    },
    plugins: ['ava'],
    rules: {
        /********************
         * Stylistic Issues
         *******************/
        // http://eslint.org/docs/rules/id-length
        // enforce minimum and maximum identifier lengths
        'id-length': ['warn', { exceptions: ['t'] }],

        /********************
         * eslint-plugin-ava
         *******************/
        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/assertion-arguments.md
        // Enforce passing correct arguments to assertions.
        'ava/assertion-arguments': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/max-asserts.md
        // Limit the number of assertions in a test.
        'ava/max-asserts': ['off', 5],

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-async-fn-without-await.md
        // Ensure that async tests use `await`.
        'ava/no-async-fn-without-await': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-cb-test.md
        //  Ensure no `test.cb()` is used.
        'ava/no-cb-test': 'warn',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-duplicate-modifiers.md
        // Ensure tests do not have duplicate modifiers.
        'ava/no-duplicate-modifiers': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-identical-title.md
        // Ensure no tests have the same title.
        'ava/no-identical-title': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-ignored-test-files.md
        // Ensure no tests are written in ignored files.
        'ava/no-ignored-test-files': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-invalid-end.md
        // Ensure `t.end()` is only called inside `test.cb()`.
        'ava/no-invalid-end': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-nested-tests.md
        // Ensure no tests are nested.
        'ava/no-nested-tests': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-only-test.md
        // Ensure no `test.only()` are present.
        'ava/no-only-test': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-assert.md
        // Ensure no assertions are skipped.
        'ava/no-skip-assert': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-skip-test.md
        // Ensure no tests are skipped.
        'ava/no-skip-test': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-statement-after-end.md
        // Ensure `t.end()` is the last statement executed.
        'ava/no-statement-after-end': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-implementation.md
        // Ensure `test.todo()` is not given an implementation function.
        'ava/no-todo-implementation': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-todo-test.md
        // Ensure no `test.todo()` is used.
        'ava/no-todo-test': 'warn',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/no-unknown-modifiers.md
        // Prevent the use of unknown test modifiers.
        'ava/no-unknown-modifiers': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-async-await.md
        // Prefer using async/await instead of returning a Promise.
        'ava/prefer-async-await': 'error',

        // Allow only use of the asserts that have no power-assert alternative.
        // https://github.com/power-assert-js/power-assert
        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/prefer-power-assert.md
        'ava/prefer-power-assert': 'off',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-ended.md
        // Ensure callback tests are explicitly ended.
        'ava/test-ended': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/test-title.md
        // Ensure tests have a title.
        'ava/test-title': ['error', 'if-multiple'],

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t-well.md
        // Prevent the incorrect use of `t`.
        'ava/use-t-well': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-t.md
        // Ensure test functions use `t` as their parameter.
        'ava/use-t': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-test.md
        // Ensure that AVA is imported with `test` as the variable name.
        'ava/use-test': 'error',

        // https://github.com/avajs/eslint-plugin-ava/blob/master/docs/rules/use-true-false.md
        // Ensure that `t.true()`/`t.false()` are used instead of `t.truthy()`/`t.falsy()`.
        'ava/use-true-false': 'error'
    }
};
