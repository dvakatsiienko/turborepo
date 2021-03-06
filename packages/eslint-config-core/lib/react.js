/* eslint-env: Node */

const complex = require('./rules/complex-react');

/**
 * @type {import('eslint').Linter.Config<import('eslint').Linter.RulesRecord)>}
 */
module.exports = {
    overrides: [
        {
            files:         [ '*.tsx', '*.jsx' ],
            settings:      { react: { version: 'detect' } },
            parserOptions: { ecmaFeatures: { jsx: true } },
            plugins:       [ 'react', 'react-hooks' ],
            extends:       [ 'plugin:react/recommended', 'plugin:react/jsx-runtime' ],
            rules:         {
                // ? React: hooks
                'react-hooks/rules-of-hooks': 2,

                // TODO connect next eslint

                // ? React: core
                'react/button-has-type':               2,
                'react/function-component-definition': complex.functionComponentDefinition,
                'react/no-adjacent-inline-elements':   2,
                'react/no-array-index-key':            2,
                'react/no-invalid-html-attribute':     2,
                'react/no-multi-comp':                 2,
                'react/no-namespace':                  2,
                'react/no-this-in-sfc':                2,
                'react/no-unstable-nested-components': 2,
                'react/prefer-es6-class':              [ 2, 'never' ],
                'react/prefer-stateless-function':     2,
                'react/prop-types':                    0,
                'react/require-render-return':         0,
                'react/self-closing-comp':             [ 2, { component: true, html: true }],
                'react/style-prop-object':             2,
                'react/void-dom-elements-no-children': 2,

                // ? React: JSX
                'react/jsx-boolean-value':                 2,
                'react/jsx-child-element-spacing':         2,
                'react/jsx-closing-bracket-location':      [ 2, 'line-aligned' ],
                'react/jsx-closing-tag-location':          2,
                'react/jsx-curly-brace-presence':          [ 2, 'never' ],
                'react/jsx-curly-newline':                 2,
                'react/jsx-curly-spacing':                 complex.jsxCurlySpacing,
                'react/jsx-equals-spacing':                [ 2, 'always' ],
                'react/jsx-filename-extension':            [ 2, { extensions: [ '.tsx', '.jsx' ] }],
                'react/jsx-first-prop-new-line':           2,
                'react/jsx-fragments':                     2,
                'react/jsx-indent':                        complex.jsxIdent,
                'react/jsx-indent-props':                  [ 2, 4 ],
                'react/jsx-max-props-per-line':            [ 2, { when: 'multiline', maximum: 1 }],
                'react/jsx-no-constructed-context-values': 2,
                'react/jsx-no-script-url':                 [ 2, [{ name: 'Link', props: [ 'to' ] }]],
                'react/jsx-no-useless-fragment':           2,
                'react/jsx-one-expression-per-line':       [ 2, { allow: 'single-child' }],
                'react/jsx-pascal-case':                   2,
                'react/jsx-props-no-multi-spaces':         2,
                'react/jsx-sort-default-props':            2,
                'react/jsx-sort-props':                    complex.jsxSortProps,
                'react/jsx-space-before-closing':          2,
                'react/jsx-wrap-multilines':               2,
            },
        },
    ],
};
