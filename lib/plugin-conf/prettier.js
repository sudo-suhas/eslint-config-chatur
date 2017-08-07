'use strict';

module.exports = {
    // Config - prettier - https://github.com/prettier/eslint-config-prettier
    // Plugin - prettier - https://github.com/prettier/eslint-plugin-prettier
    'extends': ['prettier'],
    plugins: ['prettier'],
    rules: {
        // Prettier rules
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'none',
                singleQuote: true,
                printWidth: 80,
                tabWidth: 4
            }
        ]
    }
};
