// Disabling this rule since we don't install `ava` or `jest` for this package
// If either was installed, this rule would automatically be turned off

/* eslint-disable node/no-unsupported-features */

/**
 * Function which does nothing
 */
export default function doNothing() {
    console.log('This is just a fixture, not meant to be executed.');
}

/* eslint-enable */
