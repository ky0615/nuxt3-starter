import { addPlugin, defineNuxtModule } from '@nuxt/kit'
import { ViteBuildContext } from '@nuxt/vite-builder'
import consola from 'consola'
import * as path from 'path'

export default defineNuxtModule({
    name: 'vuetify3',
    configKey: 'vuetify3',
    async setup(opts, nuxt): Promise<void> {
        const logger = consola.withScope('vuetify3')

        addPlugin({
            src: path.resolve(__dirname, 'plugins'),
        })

        // TODO: remove this configure
        // nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) => tag.startsWith('v-')

        // vuetify({
        //     autoImport: true,
        //     styles: 'expose',
        // }).forEach((it) => addVitePlugin(it as Plugin))

        nuxt.hook('vite:extend', (_ctx: ViteBuildContext) => {
            logger.debug(_ctx.config.plugins)
        })
    },
})
