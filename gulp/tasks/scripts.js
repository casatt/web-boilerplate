'use strict';

let gulp = require('gulp'),
    path = require('path'),
    exec = require('child_process').exec,
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    config = require('../config'),
    util = require('../util');

gulp.task('scripts', () => {

    return util.fetchDirectories(`${config.source}/js/`)
        .then((folders)=> {
            return Promise.all(folders.map((folder) => {

                let bundleName = folder.split(path.sep).pop();

                return new Promise((resolve, reject)=> {

                    exec(`jspm bundle-sfx ${config.source}/js/${bundleName}/index ${config.destination}/js/${bundleName}.min.js --minify`, (err, stdout, stderr) => {

                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve();
                        }

                    });
                });

            }))

        })

});