import {defineConfig} from 'vite';
import laravel, {refreshPaths} from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/filament/company/theme.css',
                'resources/css/filament/user/theme.css',
            ],
            refresh: [
                ...refreshPaths,
                'app/Filament/**',
                'app/Livewire/**',
                'app/Providers/Filament/**',
            ],
        }),
    ],
});
