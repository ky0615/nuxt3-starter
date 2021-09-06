const { ESLint } = require('eslint')

const cli = new ESLint({
    ignorePath: '.eslintignore',
})

module.exports = {
    '*.{js,json,html,vue,ts}': (files) => [
        'eslint --ext .ts,.js,.vue --ignore-path .eslintignore --max-warnings 0 --fix ' +
            files.filter((file) => !cli.isPathIgnored(file)).join(' '),

        'prettier --config .prettierrc --ignore-path .eslintignore --write ' + files.join(' '),
    ],
    '*.{css,styl,scss,vue}': 'stylelint --fix',
}
