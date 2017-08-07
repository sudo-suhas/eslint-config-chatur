'use strict';

const _ = require('lodash');

/**
 * Generate eslint config for given base, optional plugins and dependencies.
 *
 * @param {Object} baseConf Base eslint configuration
 * @returns {Object} Generated eslint config
 */
exports.generateConfig = function generateConfig(baseConf) {
    const conf = Object.assign({}, baseConf);

    conf.extends = _.concat(
        conf.extends,
        ['./lib/common-rules/index.js']
    ).filter(Boolean);

    return conf;
};
