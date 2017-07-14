"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructResponse = code => (ctx, body) => {
    ctx.response.status = code;
    ctx.response.body = Object.assign({}, body);
    return ctx;
};
//# sourceMappingURL=response.js.map