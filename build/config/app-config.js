"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convict = require("convict");
const config = convict({
    env: {
        doc: 'The applicaton environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    ip: {
        doc: 'The IP address.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port.',
        format: 'port',
        default: 1337,
        env: 'PORT',
    },
    host: {
        doc: 'The host.',
        format: '*',
        default: 'localhost',
        env: 'HOST',
    },
    version: {
        doc: 'Version.',
        format: '*',
        default: '0',
        env: 'VERSION',
    },
    passpharse: {
        doc: 'passpharse',
        format: '*',
        default: '',
        env: 'passpharse',
    }
});
const env = config.get('env');
config.loadFile(`./server/config/${env}.json`);
config.validate({ allowed: 'strict' });
exports.default = config;
//# sourceMappingURL=app-config.js.map