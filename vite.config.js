import { defineConfig } from "vite";

export default defineConfig({
   
    server: {
        port: 3000, // Указывает порт, на котором будет работать сервер Vite
        host: "localhost", // Указывает хост, на котором будет работать сервер Vite
        open: true, // Открывает веб-браузер автоматически при запуске сервера
    },

     // отмена минификации при сборке
     build: {
        minify: false,
    },
});
