"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.storage = {
    memo: {},
    set(key, data) {
        this.memo[key] = data;
    },
    get(key) {
        return this.memo[key];
    },
};
const privateKey = fs.readFileSync(`${__dirname}/secret/id_rsa`);
exports.getKey = () => {
    const key = exports.storage.get('private');
    if (key) {
        return key;
    }
    exports.storage.set('private', privateKey);
    return exports.storage.get('private');
};
//# sourceMappingURL=load-keys.js.map