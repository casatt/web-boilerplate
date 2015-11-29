'use strict';

class Config {

    constructor(environment) {
        this._environment = environment;
    }

    set environment(environment) {
        this._environment = environment;
    }

    get environment() {
        return this._environment;
    }

    get source() {
        return './src';
    }

    get destination() {
        return this._environment === 'development' ? this.dev : this.production;
    }

    get dev() {
        return './dev';
    }

    get production() {
        return './dist';
    }

    get documentation() {
        return './doc';
    }

    get temp() {
        return './tmp';
    }

}

module.exports = new Config('development');