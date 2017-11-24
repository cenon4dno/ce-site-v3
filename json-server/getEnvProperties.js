'use strict';

var envConfigs = require('./config');
var _ = require('lodash');
var env = process.env.NODE_ENV || 'dev';

module.exports = function() {
    return _.merge(envConfigs['base'], envConfigs[env]);
}
