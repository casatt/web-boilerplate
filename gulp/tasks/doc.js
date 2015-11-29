'use strict';

let gulp = require('gulp'),
    config = require('../config'),
    util = require('../util'),
    esdoc = require('gulp-esdoc'),
    sassdoc = require('sassdoc'),
    styleGuide = require('postcss-style-guide'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    tap = require('gulp-tap'),
    fs = require('fs');

gulp.task('doc', ['doc:js', 'doc:scss', 'styleguide:css']);

gulp.task('doc:js', () => {
    return gulp.src(`${config.source}/js/`)
        .pipe(esdoc());
});

gulp.task('doc:scss', ()=> {
    return gulp.src(`${config.source}/scss/**/*.scss`)
        .pipe(sassdoc({
            dest: `${config.documentation}/scss`
        }));
});

gulp.task('css:doc', ()=> {
    return gulp.src(`${config.source}/scss/*.scss`)
        .pipe(sass())
        .pipe(gulp.dest(`${config.documentation}/css/styleguide`))
});

gulp.task('styleguide:css', ['css:doc'], ()=> {
    let outputDir = `${config.documentation}/css/styleguide`,
        css = `${outputDir}/main.css`;

    return gulp.src(css)
        .pipe(gulp.dest(outputDir))
        .pipe(postcss([
            styleGuide({
                dir: outputDir,
                file: 'index.html',
                name: util.pkg.name,
                processedCSS: fs.readFileSync(css, 'utf-8')
            })
        ]));
});
