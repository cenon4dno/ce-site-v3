'use strict';

var envConfigs = require('./config');
var env = process.env.V3_ENV || 'dev';

//@TODO: Create a route server here doc: https://github.com/typicode/json-server

module.exports = function() {
    return envConfigs[env];
}
