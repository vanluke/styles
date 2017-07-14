"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("../authentication/route");
const authentication_service_1 = require("../authentication/authentication.service");
function default_1(app) {
    app.use(route_1.loginRoute);
    app.use(authentication_service_1.jwtConfig);
}
exports.default = default_1;
//# sourceMappingURL=login.js.map