import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
// import purgecss from '@fullhuman/postcss-purgecss';
import VueDevTools from 'vite-plugin-vue-devtools';
import cssnano from 'cssnano';
import viteSvgLoader from 'vite-svg-loader';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


const build = process.env.NODE_ENV === 'development';
export default defineConfig({
    build: {
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: build
            },
            sourceMap: build
        }
    },
    assetsInclude: ['**/*.woff2', '**/*.otf'],
    plugins: [
        vue(),
        ...(build ? [VueDevTools({})] : []),
        ViteImageOptimizer({
            png: {
                // https://sharp.pixelplumbing.com/api-output#png
                quality: 90
            },
            jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 90
            },
            jpg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 90
            },
            tiff: {
                // https://sharp.pixelplumbing.com/api-output#tiff
                quality: 90
            },
            // gif does not support lossless compression
            // https://sharp.pixelplumbing.com/api-output#gif
            gif: {},
            webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true
            },
            avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true
            },
            cache: false
            /* pass your config */
        }),
        tsconfigPaths(),
        viteSvgLoader({
            defaultImport: 'component', // or 'url' or 'component'
            svgoConfig: {
                multipass: true
            }
        })

    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./*', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
            '@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
            '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
            '@injections': fileURLToPath(new URL('./src/injections', import.meta.url)),
            '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
            '@middlewares': fileURLToPath(new URL('./src/middlewares', import.meta.url)),
            '@plugins': fileURLToPath(new URL('./src/plugins', import.meta.url)),
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url))
        }
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer,
                cssnano({ preset: 'default' })
                // purgecss({
                //     content: ['./src/**/*.vue', './src/**/*.scss'],
                //     defaultExtractor(content) {
                //         const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
                //         return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
                //     },
                //     safelist: [
                //         'html',
                //         'body',
                //         'section',
                //         'main',
                //         /-(leave|enter|appear)(|-(to|from|active))$/,
                //         /^(?!(|.*?:)cursor-move).+-move$/,
                //         /^router-link(|-exact)-active$/,
                //         /data-v-.*/,
                //         /^swiper/,
                //         /^marquee/,
                //         /^vue3/,
                //         /^vue3-marquee/
                //     ]
                // })
            ]
        },
        preprocessorOptions: {
            scss: {
                additionalData: `
        @import "@/styles/_var.scss";
        @import "@/styles/_color.scss";
        @import "@/styles/_function.scss";
        @import "@/styles/_mixins.scss";
        @import "@/styles/_breakpoints.scss";
        @import "@/styles/fonts.scss";
        `
            }
        }
    },
    server: {
        port: 5000
    }
});
