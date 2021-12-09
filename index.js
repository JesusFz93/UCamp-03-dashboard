// let browserSync = require("browser-sync").create();
import browserSync from "browser-sync";

browserSync.init({
    watch: true,
    server: "./app"
});