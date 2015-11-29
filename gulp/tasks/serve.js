'use strict';

let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config');


gulp.task('serve', () => {
    browserSync({
        server: {
            baseDir: [config.source, config.destination]
        }
    });

    gulp.watch(`${config.source}/**/*.{html,ejs}`, ['html']);
    gulp.watch(`${config.source}/scss/*.scss`, ['scss']);
    gulp.watch(`${config.source}/js/*.js`, ['lint:js']).on('change', browserSync.reload);
    gulp.watch(`${config.destination}/*.{html,css}`).on('change', browserSync.reload);


});