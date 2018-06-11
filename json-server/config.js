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
            },
            "endpoints": {
                "content": '/language'
            }
        }
    },
    "stage": {
        "config": {
            "api": {
                "cms": "http://content.cenonebora.com"
            },
            "endpoints": {
                "content": '/language'
            }
        }
    },
    "dev": {
        "config": {
            "api": {
                "cms": "http://localhost:3002"
            },
            "endpoints": {
                "content": '/language'
            }
        }
    }
};
