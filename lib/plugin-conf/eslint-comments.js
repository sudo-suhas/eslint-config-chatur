'use strict';

module.exports = {
    // Plugin - eslint-comments - https://github.com/mysticatea/eslint-plugin-eslint-comments
    plugins: ['eslint-comments'],
    rules: {
        // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/disable-enable-pair.md
        // requires a `eslint-enable` comment for every `eslint-disable` comment.
        'eslint-comments/disable-enable-pair': 'warn',

        // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-duplicate-disable.md
        // disallows duplicate `eslint-disable` comments.
        'eslint-comments/no-duplicate-disable': 'warn',

        // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unlimited-disable.md
        // disallows `eslint-disable` comments without rule names.
        'eslint-comments/no-unlimited-disable': 'warn',

        // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-disable.md
        // disallows unused `eslint-disable` comments.
        'eslint-comments/no-unused-disable': 'warn',

        // https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/master/docs/rules/no-unused-enable.md
        // disallows unused `eslint-enable` comments.
        'eslint-comments/no-unused-enable': 'warn'
    }
};
