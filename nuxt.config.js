export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'SParfum',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap' },
            { rel: 'stylesheets', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "assets/styles/normalize.scss",
        "assets/styles/main.scss",

    ],
    // serverMiddleware: {
    //     '/api': '~/api'
    // },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // Simple usage
        '@nuxtjs/google-fonts',

        // With options
        ['@nuxtjs/google-fonts', {
            download: true,
            families: {
                Roboto: { wght: [100, 400, 600] },
            }
        }]
    ],
    plugins: [
        { src: '~plugins/vue-carousel', ssr: false },
        { src: '~plugins/vuelidate' }
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt'
    ],



    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}