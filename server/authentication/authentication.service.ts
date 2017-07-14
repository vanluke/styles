import * as jwt from 'koa-jwt';
import * as jsonwebtoken from 'jsonwebtoken';
import * as parse from 'co-body';
import {getKey} from './load-keys';

export const createToken = async claims =>
  await jsonwebtoken.sign({
	    name: claims.username,
	    iat: Math.floor(Date.now() / 1000) - 30 },
	    getKey(),
	    { expiresIn: '1d',
	});

export const jwtConfig = jwt({
	secret: getKey(),
});
