"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const key = fs.readFileSync(`${__dirname}/server.key`);
const crt = fs.readFileSync(`${__dirname}/server.crt`);
exports.getCert = () => crt;
exports.getKeys = () => key;
//# sourceMappingURL=service.js.map