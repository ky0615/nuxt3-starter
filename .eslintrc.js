module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: { legacyDecorators: true },
    },
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended'],
    // required to lint *.vue files
    plugins: ['vue', 'node', '@typescript-eslint'],
    // add your custom rules here
    rules: {
        // indentを4に
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ObjectExpression: 1,
                flatTernaryExpressions: false,
                ignoredNodes: ['ConditionalExpression *'],
            },
        ],
        'vue/html-indent': ['error', 4, { ignores: ['VAttribute'] }],
        // オブジェクトの最後の要素にカンマをつけるか
        'comma-dangle': ['error', 'always-multiline'],
        // 実装のない空の関数は無視する
        '@typescript-eslint/no-empty-function': [0],
        // if,while文などを一行で書く時は波括弧を省略
        curly: ['error', 'multi-or-nest'],
        // シングルクオートに統一、prettierに合わせる
        quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        // htmlに常に閉じタグをつける
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                },
            },
        ],
        // htmlの改行もPrettierに任せる
        'vue/singleline-html-element-content-newline': 0,
        'vue/component-name-in-template-casing': 0,
        'vue/multiline-html-element-content-newline': 0,
        // コンポーネント名は複数の単語で構成する
        'vue/multi-word-component-names': 0,
        'arrow-parens': ['error', 'always'],
        // Interfaceの前にかならずIをつける
        'interface-name-prefix': 0,
        // functionの返値の型指定を必須にする
        '@typescript-eslint/explicit-module-boundary-types': 0,
        // any の型定義を禁止
        '@typescript-eslint/no-explicit-any': 2,
        // 初期化済みの型変数を禁止しない
        '@typescript-eslint/no-inferrable-types': 0,
        // attributeの改行はPrettierに任せるのでここでは行わない
        'vue/max-attributes-per-line': 0,
        // 不要なカッコは消す
        'no-extra-parens': 1,
        // 無駄なスペースは削除
        'no-multi-spaces': 2,
        // 不要な改行は削除
        'no-multiple-empty-lines': [2, { max: 2 }],
        // 関数とカッコはあけない
        'space-before-function-paren': [0, 'never'],
        // true/falseを無駄に使うな
        'no-unneeded-ternary': 2,
        // varは禁止
        'no-var': 2,
        // コンソールは本番環境ではwarning
        'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        // 配列のindexには空白入れるな(hogehoge[ x ])
        'computed-property-spacing': 2,
        // キー
        'key-spacing': 2,
        // キーワードの前後には適切なスペースを
        'keyword-spacing': 2,
        // 使ってない変数は警告
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_',
            },
        ],
        // nullableのメソッドからの返り値をnon nullに強制キャストしない
        '@typescript-eslint/no-non-null-assertion': 0,
        // キャメルケースの使用を容認
        camelcase: 'off',
        // 変数の存在確認はTypeScriptでチェックするため無効化
        'no-undef': 0,
        // ts-ignoreを使わない
        '@typescript-eslint/ban-ts-comment': [
            2,
            {
                'ts-expect-error': false,
            },
        ],
    },
    globals: {
        Multipayment: true,
    },
}
