'use strict';

let gulp = require('gulp'),
    config = require('../config'),
    esdoc = require('gulp-esdoc');


gulp.task('documentation', ['documentation:js']);

gulp.task('documentation:js', () => {

    return gulp.src(`${config.source}/js/`)
        .pipe(esdoc());

});