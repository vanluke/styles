"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const co = require("co-body");
const authentication_service_1 = require("./authentication.service");
const response_1 = require("../middleware/response");
function loginRoute(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ctx.url.match(/^\/api\/login/)) {
            return yield next();
        }
        console.log('before', ctx.req);
        const claims = yield co(ctx);
        console.log('abc', claims);
        const token = yield authentication_service_1.createToken(claims);
        return response_1.constructResponse(200)(ctx, { token });
    });
}
exports.loginRoute = loginRoute;
//# sourceMappingURL=route.js.map