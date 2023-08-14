import { resolve } from 'node:path';
import { defineConfig } from 'astro/config';
import * as dotenv from 'dotenv';

dotenv.config({ path: resolve(process.cwd(), '../.env') });

// https://astro.build/config
export default defineConfig({
    srcDir: './src',
    outDir: '../dist/templates',
    build: {
        format: 'file',
        client: '../static',
    },
    server: {
        port: process.env.ASTRO_PORT || 3000,
    },
});
