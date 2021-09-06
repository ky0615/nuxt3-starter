import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    srcDir: 'app/',
    buildModules: [['nuxt-storm', { nested: true }]],
    build: {
        transpile: ['vuetify'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
})
