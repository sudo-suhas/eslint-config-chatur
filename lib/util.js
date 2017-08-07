'use strict';

const _ = require('lodash');


/**
 * Resolve installed optional plugins and return the eslint config paths which
 * can be used for extending an eslint config.
 *
 * @param {Array<string>} names Optional plugin names
 * @returns {Array<string>} Array of eslint config file paths for plugins
 */
function resolvePackagedPlugins(names) {
    return names.map(plugin => `./lib/plugin-conf/${plugin}.js`);
}

/**
 * Generate eslint config for given base, optional plugins and dependencies.
 *
 * @param {Object} baseConf Base eslint configuration
 * @param {Array<string>} packagedPlugins Plugin names installed with package
 * @returns {Object} Generated eslint config
 */
exports.generateConfig = function generateConfig(baseConf, packagedPlugins) {
    const conf = Object.assign({}, baseConf);

    conf.extends = _.concat(
        conf.extends,
        ['./lib/common-rules/index.js'],
        resolvePackagedPlugins(packagedPlugins)
    ).filter(Boolean);

    return conf;
};
