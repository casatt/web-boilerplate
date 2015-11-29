'use strict';

let gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync'),
    filter = require('gulp-filter'),
    util = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    csswring = require('csswring'),
    mqpacker = require('css-mqpacker'),
    postcss = require('gulp-postcss'),
    postcssNested = require('postcss-nested');


gulp.task('scss', () => {

    util.log(
        util.colors.green('Compiling scss')
    );

    return gulp.src(`${config.source}/scss/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .on('error', (err) => {
            console.error(err);
            this.emit('end');
        })
        .pipe(rename({suffix: '.min'}))
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 versions']}),
            postcssNested,
            mqpacker,
            csswring({
                removeAllComments: true
            })
        ]))
        .pipe(sourcemaps.write('.'))  // Create that map file
        .pipe(gulp.dest(`${config.destination}/css/`))
        .pipe(browserSync.reload({stream: true}));
});