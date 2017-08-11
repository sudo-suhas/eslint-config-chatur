# eslint-config-chatur

[![Greenkeeper badge](https://badges.greenkeeper.io/sudo-suhas/eslint-config-chatur.svg)](https://greenkeeper.io/)

> An eslint configuration for the astute

## Installing / Getting started

Quick start - `npm install --save-dev eslint eslint-config-chatur`

**Eslint configuration**:
Simply define your `.eslintrc.json` (or add a `eslintConfig` object to `package.json`) like so:
```js
{
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
