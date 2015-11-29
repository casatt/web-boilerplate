'use strict';

let gulp = require('gulp'),
    config = require('../config');

gulp.task('environment:development', ()=> config.environment = 'development');
gulp.task('environment:production', ()=> config.environment = 'production');