'use strict';

const possibleErrors = require('./possible-errors');
const bestPractices = require('./best-practices');
const commonJs = require('./common-js');
const variables = require('./variables');
const stylisticIssues = require('./stylistic-issues');
const es6 = require('./es6');

module.exports = {
    extends: ['eslint:recommended'],
    rules: Object.assign(
        {},
        possibleErrors,
        bestPractices,
        commonJs,
        variables,
        stylisticIssues,
        es6
    )
};
