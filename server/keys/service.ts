import * as fs from 'fs';

const key = fs.readFileSync(`${__dirname}/server.key`);
const crt = fs.readFileSync(`${__dirname}/server.crt`);

export const getCert = () => crt;

export const getKeys = () => key;
