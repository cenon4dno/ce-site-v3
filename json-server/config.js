module.exports = {
    "base": {
        "config": {
            "api": {
                "cms": "xxx"
            },
            "endpoints": {
                "content": '/language'
            }
        }
    },
    "prod": {
        "config": {
            "api": {
                "cms": "http://content.cenonebora.com"
            }
        }
    },
    "stage": {
        "config": {
            "api": {
                "cms": "http://content.cenonebora.com"
            }
        }
    },
    "dev": {
        "config": {
            "api": {
                "cms": "http://localhost:3002"
            }
        }
    }
};
