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
        return this._environment === 'development' ? './dev' : './dist';
    }

}

module.exports = new Config('development');