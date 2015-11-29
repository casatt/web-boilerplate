'use strict';

let gulp = require('gulp'),
    rimraf = require('rimraf'),
    config = require('../config');

gulp.task('clean', (cb) => {
    rimraf('./dev', () =>
        rimraf('./dist', cb));
});

gulp.task('clean:post', (cb) => {
    rimraf(`${config.temp}`, cb);
});