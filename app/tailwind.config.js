// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const colorPalette = {
    // 基本
    'normal-text': '#333333',
    'light-text': '#4e4e4e',
    'bg': '#FFFEF6',
    'white': '#FFFFFF',
    'black': '#000000',
    'blue': '#289CF0',
    'red': '#e94709',

    // 淡色
    'light-blue': '#c5e5f1',
    'light-green': '#CFFFD0',
    'light-red': '#FFCFCF',
    'water-blue': '#F6FDFF',
    'light-bg': '#f6f6f6',
    'light-border': '#e8e8e8',

    // 濃色
    'dark': '#1b1e21',
    'dark-text': '#0a0a0a',
    'dark-bg': '#d6d8d9',
    'dark-border': '#c6c8ca',

    // メイン
    'primary': '#e38800',
    'primary-light-1': '#ffee7d',
    'primary-light-2': '#f9bb00',
    'primary-light-3': '#ffad0e',

    // サブ
    'secondary': '#f6f6f6',

    // 情報
    'info': '#0c5460',
    'info-text': '#04323a',
    'info-bg': '#d1ecf1',
    'info-border': '#bee5eb',

    // 成功
    'success': '#155724',
    'success-text': '#07290f',
    'success-bg': '#d4edda',
    'success-border': '#c3e6cb',

    // 警告
    'warning': '#856404',
    'warning-text': '#4c3b2c',
    'warning-bg': '#fff3cd',
    'warning-border': '#ffeeba',

    // 危険
    'danger': '#ff0000',
    'danger-text': '#eb0000',
    'danger-bg': '#fff5f5',
    'danger-border': '#f5c6cb',
}

const plugins = [
    plugin(function({ addUtilities }) {
        const newUtilities = {
            '.horizontal-tb': {
                writingMode: 'horizontal-tb',
            },
            '.vertical-rl': {
                writingMode: 'vertical-rl'
            },
            '.vertical-lr': {
                writingMode: 'vertical-lr'
            }
        }
        addUtilities(newUtilities)
    })
]

/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        // enabled: false,
        content: [
            'app/components/**/*.vue',
            'app/layouts/**/*.vue',
            'app/pages/**/*.vue',
            'app/plugins/**/*.js',
            'app/plugins/**/*.ts',
            'app/nuxt.config.js',
            'app/nuxt.config.ts',
            'app/safelist.txt',
        ],
    },
    theme: {
        fontFamily: {
            body: [
                '"Noto Sans JP"',
                'sans-serif',
            ],
        },
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            colors: {
                c: {
                    ...colorPalette,
                },
                ...colors,
            },
            fontSize: {
                '4.5xl': '2.4rem',
                '5.5xl': '3.4rem',
                '6.5xl': '4.8rem',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
            spacing: {
                1.5: '0.375rem',
                2.5: '0.625rem',
            },
            lineHeight: {
                '12': '3rem',
                '13': '3.25rem',
            },
            height: {
                'fill': '-webkit-fill-available',
            },
            minHeight: {
                'fill': '-webkit-fill-available',
            },
            zIndex: {
                0: 0,
                10: 10,
                20: 20,
                30: 30,
                40: 40,
                50: 50,
                60: 60,
                70: 70,
                80: 80,
                90: 90,
                100: 100,
            },
        },
    },
    plugins: plugins,
    // corePlugins: {
    //     accessibility: false,
    //     alignContent: false,
    //     fill: false,
    //     // fontFamily: false,
    //     // fontSmoothing: false,
    //     placeholderColor: false,
    //     placeholderOpacity: false,
    //     // rotate: false,
    //     // scale: false,
    //     // skew: false,
    //     // space: false,
    //     stroke: false,
    //     strokeWidth: false,
    //     tableLayout: false,
    //     textOpacity: false,
    //     textTransform: false,
    //     userSelect: false,
    //     // verticalAlign: false,
    //     // visibility: false,
    //     whitespace: false,
    // },
    // future: {
    //     purgeLayersByDefault: true,
    //     removeDeprecatedGapUtilities: true,
    // },
}
