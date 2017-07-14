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
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");
const load_keys_1 = require("./load-keys");
exports.createToken = (claims) => __awaiter(this, void 0, void 0, function* () {
    return yield jsonwebtoken.sign({
        name: claims.username,
        iat: Math.floor(Date.now() / 1000) - 30
    }, load_keys_1.getKey(), { expiresIn: '1d',
    });
});
exports.jwtConfig = jwt({
    secret: load_keys_1.getKey(),
});
//# sourceMappingURL=authentication.service.js.map