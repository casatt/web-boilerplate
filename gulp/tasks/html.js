'use strict';

let gulp = require('gulp'),
    config = require('../config'),
    ejs = require('gulp-ejs'),
    minifyHTML = require('gulp-minify-html');

gulp.task('html', () => {
    return gulp.src(`${config.source}/**.{ejs, html}`)
        .pipe(ejs({
            environment: config.environment
        }))
        .pipe(minifyHTML({
                empty: true
            }
        ))
        .pipe(gulp.dest(config.destination))
});