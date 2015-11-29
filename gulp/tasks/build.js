'use strict';

let gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', (cb) => {
    runSequence('clean', 'environment:production', ['scripts', 'scss', 'html'], ['compress', 'serve'], cb);
});