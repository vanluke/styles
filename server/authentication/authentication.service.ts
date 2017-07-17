import * as jwt from 'koa-jwt';
import * as jsonwebtoken from 'jsonwebtoken';
import * as parse from 'co-body';
import * as bcrypt from 'bcrypt';
import {connect, uriAuth} from '../middleware/mongodb.service';
import {appendId} from '../middleware/mongodb.service';
import {getKey} from './load-keys';

const SALT = bcrypt.genSaltSync(10);;
export const dbSource = connect(uriAuth);

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

export const insertUser = (db, user) => new Promise((resolve, reject) =>
    db.collection('user')
    .insertOne(user, (err, results) => {
      if (err) {
        return reject(err);
      }
      const response = appendId(user, results);
      return resolve(response);
		})
);

export const getUser = (db, {username, password}) => new Promise((resolve, reject) =>
	 db.collection('user').findOne({username, password}, (err, user) =>
	 	 (err ? reject(err) : resolve(user)),
	));

export const authUser = async ({username, password}) => {
	try {
		return await dbSource(getUser)({
			username,
			password: bcrypt.hashSync(password, SALT),
		});
	} catch(e) {
		console.log(e);
		throw e;
	}
};

export const createUser = async ({username, password}) => {
	try {
		return await dbSource(insertUser)({
			username,
			password: bcrypt.hashSync(password, SALT),
		});
	} catch(e) {
		console.log(e);
		throw e;
	}
};
