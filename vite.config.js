import { defineConfig } from "vite";
import { resolve } from "path";
import legacy from "@vitejs/plugin-legacy";

import pages from "./pages/pages.config";
const pagesInput = {};
pages.forEach(page => {
    pagesInput[page.name] = page.path;
});

export default defineConfig({
    server: {
        port: 3000, // Указывает порт, на котором будет работать сервер Vite
        host: "localhost", // Указывает хост, на котором будет работать сервер Vite
        open: true, // Открывает веб-браузер автоматически при запуске сервера
    },

    // отмена минификации при сборке
    build: {
        minify: true,
        rollupOptions: {
            input: {
                ...pagesInput,
            },
        },
    },
    plugins: [
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
});

// vite.config.js

// export default defineConfig({

// });
