'use strict';

module.exports = {
    // http://eslint.org/docs/rules/callback-return
    // require `return` statements after callbacks
    'callback-return': 'error',

    // http://eslint.org/docs/rules/global-require
    // require `require()` calls to be placed at top-level module scope
    'global-require': 'error',

    // http://eslint.org/docs/rules/handle-callback-err
    // require error handling in callbacks
    'handle-callback-err': ['error', '^.*(e|E)rr'],

    // http://eslint.org/docs/rules/no-mixed-requires
    // disallow require calls to be mixed with regular variable declarations
    'no-mixed-requires': ['error', { grouping: true, allowCall: true }],

    // http://eslint.org/docs/rules/no-new-require
    // disallow `new` operators with calls to `require`
    'no-new-require': 'error'
};
