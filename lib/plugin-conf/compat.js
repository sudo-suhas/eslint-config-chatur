'use strict';

module.exports = {
    // Plugin - compat - https://github.com/amilajack/eslint-plugin-compat
    // `eslint-plugin-compat` uses the browserslist configuration in package.json
    // See `ai/browserslist` for configuration.
    // https://github.com/ai/browserslist, http://browserl.ist/
    plugins: ['compat'],
    rules: {
        'compat/compat': 'warn'
    }
};
