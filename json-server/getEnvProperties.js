'use strict';

var envConfigs = require('./config');
var env = process.env.NODE_ENV || 'dev';

module.exports = function() {
    return envConfigs[env]
}
