const appRoot = require('app-root-path')
const path = require('path')
module.exports = {
    PORTAL_TITLE: "https://www.microapp.io/pt",
    PATHS: {       
        LOG_FILE_PATH: path.join(
            `${appRoot}/report/logs/`
        )
    }
}