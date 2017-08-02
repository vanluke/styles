import * as jwt from 'koa-jwt';
import * as jsonwebtoken from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import {connect, uriAuth} from '../middleware/mongodb.service';
import {appendId} from '../middleware/mongodb.service';
import {getKey} from './load-keys';
import {IUser, ApplicationUser} from './ApplicationUser';

const SALT = bcrypt.genSaltSync(10);;
export const dbSource = connect(uriAuth);

export const createToken = async claims =>
  await jsonwebtoken.sign({
			name: claims.username,
			email: claims.email,
			dataOfBirth: claims.dataOfBirth,
			group: claims.group,
			createdAt: claims.createdAt,
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

export const getUser = (db, {username}) => new Promise((resolve, reject) =>
	 db.collection('user').findOne({username}, (err, user) =>
	 	 (err ? reject(err) : resolve(user)),
	));

export const authUser = async ({username, password}) => {
	try {
		const dbUser = <IUser>(await dbSource(getUser)({
			username,
		}));
		const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
		if(!isPasswordCorrect) {
			throw {
				message: 'Passwrod or username is not correct',
			}
		}
		return new ApplicationUser(dbUser);
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
