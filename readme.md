# eslint-config-chatur

[![Greenkeeper badge](https://badges.greenkeeper.io/sudo-suhas/eslint-config-chatur.svg?style=flat-square)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> An eslint configuration for the astute

## Installing / Getting started

Quick start - `npm install --save-dev eslint eslint-config-chatur`

**Eslint configuration**:
Simply define your `.eslintrc.json` (or add a `eslintConfig` object to `package.json`) like so:
```js
{
  "root": true,
  "extends": "chatur"
}
```
If you prefer YAML:
```yml
# .eslintrc.yml
root: true
extends: chatur
```

Node.js 4 or above is required.

`eslint-config-chatur` provides eslint configuration for three commonly used environments:
  * [node.js](#node.js)
  * [browser](#browser)
  * [test](#test)

Furthermore, it adapts to your usage automatically with minimal manual configuration.
It does this by peeking at the modules and eslint plugins you have installed.

There are 2 types of plugins used for each configuration:
  * **Installed by default** - These plugins are included as dependency for this modules and they are enabled
    depending on the environment. Installation of these should not be required.
  * **Optional** - These plugins are optional and also depend on the libraries you are using.
    For example, if `lodash` is installed `eslint-plugin-lodash` can be installed to enable
    lodash specific rules. So if you do not want some plugin to be enabled, don't install it :sunglasses:.

**NOTE**: You will probably get warnings when you install this package:

```
λ npm i eslint-config-chatur
npm WARN eslint-config-chatur@1.2.0 requires a peer of babel-eslint@>= 7.2.3 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-config-prettier@>= 2.3.0 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-ava@>= 4.2.1 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-babel@>= 4.1.2 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-compat@>= 1.0.4 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-import@>= 2.7.0 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-jest@>= 20.0.3 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-lodash@>= 2.4.4 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-prettier@>= 2.1.2 but none was installed.
npm WARN eslint-config-chatur@1.2.0 requires a peer of eslint-plugin-promise@>= 3.5.0 but none was installed.
```

npm currently does not have the concept of optional peer dependencies. You can safely ignore these warnings.

## Configuration

Configuration for `exlint-config-chatur` is handled through your dependencies itself.
Simply install the plugins you need. However, there is no harm in installing extra plugins.
For example, even if you install `eslint-plugin-lodash`, if you don't have `lodash` as a dependency,
the plugin rules will not be activated.

### node.js

**Enabled by default**:
  * [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
  * [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
  * [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

**Optional plugins**:
  * [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
  * [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)(needs [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier))

**Installation**:
```shell
$ npm install --save-dev eslint eslint-config-chatur \
    eslint-plugin-promise \
    eslint-plugin-lodash \
    eslint-plugin-prettier eslint-config-prettier

# Single line for windows
λ npm install --save-dev eslint eslint-config-chatur eslint-plugin-promise eslint-plugin-lodash eslint-plugin-prettier eslint-config-prettier
```

**Eslint configuration**:
```yml
# .eslintrc.yml
root: true
extends: chatur
```

### browser

**Enabled by default**:
  * [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
  * [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

**Optional plugins**:
  * [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
  * [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
  * [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)(needs [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier))
  * [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)
  * [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)

**Installation**:
```shell
$ npm install --save-dev eslint babel-eslint eslint-config-chatur \
    eslint-plugin-babel \
    eslint-plugin-promise \
    eslint-plugin-lodash \
    eslint-plugin-prettier eslint-config-prettier \
    eslint-plugin-compat \
    eslint-plugin-import

# Single line for windows
λ npm install --save-dev eslint babel-eslint eslint-config-chatur eslint-plugin-babel eslint-plugin-promise eslint-plugin-lodash eslint-plugin-prettier eslint-config-prettier eslint-plugin-compat eslint-plugin-import
```

**NOTE**: Using the browser eslint configuration requires `babel-eslint`(not optional).
This allows eslint to handle dynamic imports using `import('module-name')`.

**Eslint configuration**:
```yml
# .eslintrc.yml
root: true
extends: chatur/browser
```

### test

**Enabled by default**:
  * [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)
  * [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
  * [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)

**Optional plugins**:
  * [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [eslint-plugin-lodash](https://github.com/wix/eslint-plugin-lodash)
  * [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)(needs [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier))
  * [eslint-plugin-jest](https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest)
  * [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava)

**Installation**:
```shell
$ npm install --save-dev eslint eslint-config-chatur \
    eslint-plugin-promise \
    eslint-plugin-lodash \
    eslint-plugin-prettier eslint-config-prettier \
    eslint-plugin-jest \
    eslint-plugin-ava

# Single line for windows
λ npm install --save-dev eslint eslint-config-chatur eslint-plugin-promise eslint-plugin-lodash eslint-plugin-prettier eslint-config-prettier eslint-plugin-jest eslint-plugin-ava
```

**Eslint configuration**:
```yml
# .eslintrc.yml
root: true
extends: chatur/test
```

## Tests

Only checks whether eslint configurations are valid.

```shell
$ npm run lint
```

## Style guide

[eslint-config-chatur](https://github.com/sudo-suhas/eslint-config-chatur) :laughing:

## Licensing

MIT © [Suhas Karanth](https://github.com/sudo-suhas)
