'use strict';

let gulp = require('gulp'),
    gzip = require('gulp-gzip'),
    config = require('../config');


gulp.task('compress', () => {
    return gulp.src(`${config.destination}/**/*.{js,html,css}`)
        .pipe(gzip())
        .pipe(gulp.dest(config.destination))
});