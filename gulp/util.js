'use strict';

let fs = require('fs'),
    path = require('path'),
    pkg = require('../package.json');

class Util {

    constructor() {
    }

    get pkg() {
        return pkg;
    }

    fetchDirectories(dir) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, files) => {
                if (err) {
                    reject(err);
                }
                else {
                    return Promise.all(files.map((file) =>
                            new Promise((resolve, reject) => {

                                fs.stat(path.join(dir, file), (err, stats)=> {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(
                                            stats.isDirectory() ? path.join(dir, file) : null
                                        )
                                    }
                                })
                            }))
                        )
                        .then((folders)=> {
                            resolve(folders.filter((folder) => folder));
                        });

                }
            })
        })
    }

}

module.exports = new Util();