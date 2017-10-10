'use strict';

module.exports = {
    extends: ['plugin:vue/recommended'],
    plugins: ['vue'],
    rules: {
        /********************
         * Possible Errors
         *******************/
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-dupe-keys.md
        // disallow duplication of field names
        'vue/no-dupe-keys': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-parsing-error.md
        // disallow parsing errors in `<template>`
        'vue/no-parsing-error': [
            'error',
            {
                'abrupt-closing-of-empty-comment': true,
                'absence-of-digits-in-numeric-character-reference': true,
                'cdata-in-html-content': true,
                'character-reference-outside-unicode-range': true,
                'control-character-in-input-stream': true,
                'control-character-reference': true,
                'eof-before-tag-name': true,
                'eof-in-cdata': true,
                'eof-in-comment': true,
                'eof-in-tag': true,
                'incorrectly-closed-comment': true,
                'incorrectly-opened-comment': true,
                'invalid-first-character-of-tag-name': true,
                'missing-attribute-value': true,
                'missing-end-tag-name': true,
                'missing-semicolon-after-character-reference': true,
                'missing-whitespace-between-attributes': true,
                'nested-comment': true,
                'noncharacter-character-reference': true,
                'noncharacter-in-input-stream': true,
                'null-character-reference': true,
                'surrogate-character-reference': true,
                'surrogate-in-input-stream': true,
                'unexpected-character-in-attribute-name': true,
                'unexpected-character-in-unquoted-attribute-value': true,
                'unexpected-equals-sign-before-attribute-name': true,
                'unexpected-null-character': true,
                'unexpected-question-mark-instead-of-tag-name': true,
                'unexpected-solidus-in-tag': true,
                'unknown-named-character-reference': true,
                'end-tag-with-attributes': true,
                'duplicate-attribute': true,
                'end-tag-with-trailing-solidus': true,
                'non-void-html-element-start-tag-with-trailing-solidus': true,
                'x-invalid-end-tag': true,
                'x-invalid-namespace': true
            }
        ],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-reserved-keys.md
        // disallow overwriting reserved keys
        'vue/no-reserved-keys': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-shared-component-data.md
        // enforce component's data property to be a function
        'vue/no-shared-component-data': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-template-key.md
        // disallow `key` attribute on `<template>`
        'vue/no-template-key': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-render-return.md
        // enforce render function to always return value
        'vue/require-render-return': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-valid-default-prop.md
        // enforce props default values to be valid
        'vue/require-valid-default-prop': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/return-in-computed-property.md
        // enforce that a return statement is present in computed property
        'vue/return-in-computed-property': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-template-root.md
        // enforce valid template root
        'vue/valid-template-root': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-bind.md
        // enforce valid `v-bind` directives
        'vue/valid-v-bind': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-cloak.md
        // enforce valid `v-cloak` directives
        'vue/valid-v-cloak': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else-if.md
        // enforce valid `v-else-if` directives
        'vue/valid-v-else-if': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-else.md
        // enforce valid `v-else` directives
        'vue/valid-v-else': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-for.md
        // enforce valid `v-for` directives
        'vue/valid-v-for': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-html.md
        // enforce valid `v-html` directives
        'vue/valid-v-html': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-if.md
        // enforce valid v-if directives
        'vue/valid-v-if': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-model.md
        // enforce valid `v-model` directives
        'vue/valid-v-model': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-on.md
        // enforce valid `v-on` directives
        'vue/valid-v-on': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-once.md
        // enforce valid `v-once` directives
        'vue/valid-v-once': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-pre.md
        // enforce valid `v-pre` directives
        'vue/valid-v-pre': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-show.md
        // enforce valid `v-show` directives
        'vue/valid-v-show': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/valid-v-text.md
        // enforce valid `v-text` directives
        'vue/valid-v-text': 'error',

        /********************
         * Best Practices
         *******************/
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md
        // enforce end tag style
        'vue/html-end-tags': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-async-in-computed-properties.md
        // disallow asynchronous actions in computed properties
        'vue/no-async-in-computed-properties': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-confusing-v-for-v-if.md
        // disallow confusing `v-for` and `v-if` on the same element
        'vue/no-confusing-v-for-v-if': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md
        // disallow duplication of attributes
        'vue/no-duplicate-attributes': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-side-effects-in-computed-properties.md
        // disallow side effects in computed properties
        'vue/no-side-effects-in-computed-properties': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-textarea-mustache.md
        // disallow mustaches in `<textarea>`
        'vue/no-textarea-mustache': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/order-in-components.md
        // enforce order of properties in components
        'vue/order-in-components': [
            'warn',
            {
                order: [
                    ['name', 'delimiters', 'functional', 'model'],
                    ['components', 'directives', 'filters'],
                    ['parent', 'mixins', 'extends', 'provide', 'inject'],
                    'el',
                    'template',
                    'props',
                    'propsData',
                    'data',
                    'computed',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'render',
                    'renderError'
                ]
            }
        ],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-component-is.md
        // require `v-bind:is` of `<component>` elements
        'vue/require-component-is': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-default-prop.md
        // require default value for props
        'vue/require-default-prop': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-prop-types.md
        // require type definitions in props
        'vue/require-prop-types': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/require-v-for-key.md
        // require `v-bind:key` with `v-for` directives
        'vue/require-v-for-key': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/this-in-template.md
        // enforce usage of `this` in template
        'vue/this-in-template': ['error', 'never'],

        /********************
         * Stylistic Issues
         *******************/
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/attribute-hyphenation.md
        // enforce attribute naming style in template
        'vue/attribute-hyphenation': ['error', 'always'],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md
        // enforce quotes style of HTML attributes
        'vue/html-quotes': ['warn', 'double'],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md
        // enforce self-closing style
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    normal: 'never',
                    void: 'never',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md
        // enforce the maximum number of attributes per line
        'vue/max-attributes-per-line': 'off',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/mustache-interpolation-spacing.md
        // enforce unified spacing in mustache interpolations
        'vue/mustache-interpolation-spacing': ['error', 'always'],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/name-property-casing.md
        // enforce specific casing for the name property in Vue components
        'vue/name-property-casing': ['error', 'PascalCase'],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-multi-spaces.md
        // disallow multiple spaces
        'vue/no-multi-spaces': 'error',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md
        // enforce `v-bind` directive style
        'vue/v-bind-style': ['warn', 'shorthand'],

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md
        // enforce `v-on` directive style
        'vue/v-on-style': ['warn', 'shorthand']
    }
};
