/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */
import * as WebFont from 'webfontloader'

export const useFontLoad = () => {
    return (
        config: WebFont.Config = {
            google: {
                families: ['Roboto:100,300,400,500,700,900&display=swap'],
            },
        },
    ) => {
        onMounted(async () => {
            const webFontLoader = await import('webfontloader')
            webFontLoader.load(config)
        })
    }
}
