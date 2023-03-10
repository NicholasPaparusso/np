import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/js/app.js',
                'resources/js/appVue.js',
                'resources/scss/appVue.scss',
            ],
            refresh: true,
        }),

        vue({
            trasformAssetUrls:{
                base: null,
                includeAbsolute: false,
            }
        }),
    ],
});
