'use strict';

var envConfigs = require('./config');
const result = require('dotenv').config();
var env = result.parsed.V3_ENV || 'dev';

//@TODO: Create a route server here doc: https://github.com/typicode/json-server

module.exports = function() {
    return envConfigs[env];
}
