'use strict';

let gulp = require('gulp'),
    config = require('../config'),
    esdoc = require('gulp-esdoc'),
    sassdoc = require('sassdoc');


gulp.task('doc', ['doc:js', 'doc:scss']);

gulp.task('doc:js', () => {
    return gulp.src(`${config.source}/js/`)
        .pipe(esdoc());
});

gulp.task('doc:scss', ()=> {
    return gulp.src(`${config.source}/scss/**/*.scss`)
        .pipe(sassdoc({
            dest: './doc/scss'
        }))
});