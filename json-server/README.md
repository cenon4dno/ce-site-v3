## Usage
You can update the env config files

## Installation 
* Pre-installed on ng2-webpack generator
* Install on server `json-server@^0.8.12`
* Install on server `lodash@^4.12.0`


## Updated config
* On package.json scripts added are env-config - set env config files to port 3001
* /etc/rc.local added a startup command to call env-config using `npm run-script env-config`
* getEnvProperties.js should just fetch the config json base on your NODE_ENV value (dev,stage,prod)
