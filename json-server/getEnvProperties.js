'use strict';

var envConfigs = require('./config');
var _ = require('lodash');
var env = process.env.NODE_ENV || 'dev';

//@TODO: Create a route server here doc: https://github.com/typicode/json-server

module.exports = function() {
    return _.merge(envConfigs['base'], envConfigs[env]);
}
