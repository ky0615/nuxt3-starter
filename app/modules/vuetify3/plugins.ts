import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin(({ vueApp }) => {
    const vuetify = createVuetify({
        theme: {
            // @ts-expect-error
            dark: true,
        },
        components,
    })
    vueApp.use(vuetify)
})
