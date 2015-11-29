'use strict';

let gulp = require('gulp'),
    runSequence = require('run-sequence'),
    config = require('../config');

gulp.task('develop', (cb) => {
    runSequence('clean', 'environment:development', 'lint', ['scripts', 'scss', 'html'], 'serve', cb);
});