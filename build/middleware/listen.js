"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const app_config_1 = require("../config/app-config");
const host = app_config_1.default.get('host');
const port = app_config_1.default.get('port');
const version = app_config_1.default.get('version');
const passphrase = app_config_1.default.get('passpharse');
function default_1(options, app) {
    return https.createServer({
        key: options.key,
        cert: options.cert,
        passphrase,
    }, app.callback()).listen(port, host);
}
exports.default = default_1;
//# sourceMappingURL=listen.js.map