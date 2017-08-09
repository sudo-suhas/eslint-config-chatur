'use strict';

const _ = require('lodash');
const appRoot = require('app-root-path');

const prjPkg = require(`${appRoot}/package.json`);

const installedDeps = new Set(
    _.concat(
        Object.keys(prjPkg.dependencies || {}),
        Object.keys(prjPkg.devDependencies || {})
    )
);

const exceptions = {
    promise: true,
    babel: installedDeps.has('babel-eslint'),
    'eslint-plugin-prettier':
        installedDeps.has('eslint-plugin-prettier') &&
        installedDeps.has('eslint-config-prettier'),
    compat: true,
    import: true
};

exports.isInstalled = isInstalled;

/**
 * Check if the given dependency is installed.
 * Checks against `dependencies`, `devDependencies` in project `package.json`.
 *
 * @param {string} dep Name of the dependency
 * @returns {boolean} `true` if installed, `false` if not
 */
function isInstalled(dep) {
    if (_.has(exceptions, dep)) return exceptions[dep];
    return installedDeps.has(dep);
}

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
 * Resolve installed dependencies and return the eslint config paths which
 * can be used for extending an eslint config.
 *
 * @param {Array<string>} deps Dependencies list
 * @returns {Array<string>} Array of eslint config file paths for plugins
 */
function resolveDependencyPlugins(deps) {
    return deps
        .filter(dep => isInstalled(dep) && isInstalled(`eslint-plugin-${dep}`))
        .map(dep => `./lib/plugin-conf/${dep}.js`);
}

/**
 * Generate eslint config for given base, optional plugins and dependencies.
 *
 * @param {Object} baseConf Base eslint configuration
 * @param {Array<string>} packagedPlugins Plugin names installed with package
 * @param {Array<string>} deps Dependency list to include plugin configurations for
 * @returns {Object} Generated eslint config
 */
exports.generateConfig = function generateConfig(
    baseConf,
    packagedPlugins,
    deps
) {
    const conf = Object.assign({}, baseConf);

    conf.extends = _.concat(
        conf.extends,
        ['./lib/common-rules/index.js'],
        resolvePackagedPlugins(packagedPlugins),
        resolveDependencyPlugins(deps)
    ).filter(Boolean);

    return conf;
};
