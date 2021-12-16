import browserSync from "browser-sync";

browserSync.init({
    watch: true,
    server: "./app"
});