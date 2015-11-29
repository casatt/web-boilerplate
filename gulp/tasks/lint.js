'use strict';

let gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    config = require('../config');

gulp.task('lint', () => {
    return gulp.start('lint:js');
});

gulp.task('lint:js', () => {
    return gulp.src(`${config.source}/js/**/*.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulp.dest(config.destination));
});