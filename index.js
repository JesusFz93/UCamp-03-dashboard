let browserSync = require("browser-sync").create();

browserSync.init({
    watch: true,
    server: "./app"
});