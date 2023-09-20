module.exports = {
    root: true,
    env: {
        "es2021": true,
        "browser": true,
        "node": true
    },
    extends: [
        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:prettier/recommended',
        // 'eslint-config-prettier'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        "parser": "@typescript-eslint/parser"
    },
    'plugins': [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        // "prettier/prettier": ["error", {
        //     "endOfLine": "auto",
        //     "singleQuote": true,       // использует одинарные кавычки вместо двойных
        //     "trailingComma": "all"     // добавляет запятые после каждого свойства объекта/массива
        // }],
        '@typescript-eslint/indent': ['error', 4, {
            "SwitchCase": 1,
            "ignoredNodes": ['TSTypeReference, TSUnionType']
        }],
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/quotes": ["error", "single"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "error",

        'object-curly-spacing': ['error', 'always'],
        'vuejs-accessibility/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        'vue/html-indent': [
            'error',
            2,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/first-attribute-linebreak': ['error', {
            singleline: 'beside',
            multiline: 'beside'
        }],
        'vue/html-button-has-type': ['error', {
            button: true,
            submit: true,
            reset: true
        }],
        'vue/max-len': ['error', {
            code: 400,
            template: 2000,
            tabWidth: 2,
            comments: 400,
            ignorePattern: '',
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: false,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false,
            ignoreHTMLAttributeValues: false,
            ignoreHTMLTextContents: false
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always'
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: {
                max: 1
            },
            multiline: {
                max: 1
            }
        }],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'key',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                ['provide', 'inject'],
                'ROUTER_GUARDS',
                'layout',
                'middleware',
                'validate',
                'scrollToTop',
                'transition',
                'loading',
                'inheritAttrs',
                'model',
                ['props', 'propsData'],
                'emits',
                'setup',
                'asyncData',
                'data',
                'fetch',
                'head',
                'computed',
                'watch',
                'watchQuery',
                'LIFECYCLE_HOOKS',
                'methods',
                ['template', 'render'],
                'renderError'
            ]
        }],
        'vue/no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: false,
            skipRegExps: false,
            skipTemplates: false,
            skipHTMLAttributeValues: false,
            skipHTMLTextContents: false
        }],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: false
        }],
        'vue/no-dupe-keys': ['error', {
            groups: []
        }],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            registeredComponentsOnly: true
        }],
        'comma-dangle': ['error', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        'no-console': 'off',
        'no-debugger': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'no-plusplus': 'off',
        'constructor-super': 'off',
        'no-mixed-operators': [
            'error',
            {
                groups: [
                    ['+', '-', '*', '/', '%', '**'],
                    ['&', '|', '^', '~', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                    ['&&', '||'],
                    ['in', 'instanceof']
                ],
                allowSamePrecedence: true
            }
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',
        'no-unused-expressions': 'error',
        'no-param-reassign': 'off',
        'prefer-destructuring': ['error', {
            array: true,
            object: true
        }, {
            enforceForRenamedProperties: false
        }
        ],
        'no-bitwise': ['error', {allow: ['~']}],
        'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
        'object-curly-newline': ['error', {
            ObjectExpression: {multiline: true, consistent: true},
            ObjectPattern: {multiline: true, consistent: true}
        }],
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}]
    }
};
