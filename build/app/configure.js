"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mount = require("koa-mount");
const json = require("koa-json");
const cors = require("koa-cors");
const routes_1 = require("../routes");
const app_1 = require("./app");
const enforceHttps = require("koa-sslify");
const app_config_1 = require("../config/app-config");
const error_handler_1 = require("../middleware/error.handler");
const listen_1 = require("../middleware/listen");
const keys_1 = require("../keys");
const version = app_config_1.default.get('version');
const endpoint = `/api/v${version}`;
app_1.default.use(enforceHttps());
app_1.default.use(json());
app_1.default.use(cors());
app_1.default.use(mount(endpoint, routes_1.default.routes()));
error_handler_1.default(app_1.default);
listen_1.default({
    key: keys_1.getKeys(),
    cert: keys_1.getCert(),
}, app_1.default);
//# sourceMappingURL=configure.js.map