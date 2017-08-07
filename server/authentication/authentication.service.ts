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
			name: claims.name,
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

export const getUser = (db, {name}) => new Promise((resolve, reject) =>
	 db.collection('user').findOne({name}, (err, user) =>
	 	 (err ? reject(err) : resolve(user)),
	));

export const authUser = async ({name, password}) => {
	try {
		const dbUser = <IUser>(await dbSource(getUser)({
			name,
		}));
		if (!dbUser) {
			return;
		}
		const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
		if(!isPasswordCorrect) {
			return;
		}
		return new ApplicationUser(dbUser);
	} catch(e) {
		console.log(e);
		throw e;
	}
};

export const createUser = async ({name, password}) => {
	try {
		return await dbSource(insertUser)({
			name,
			password: bcrypt.hashSync(password, SALT),
		});
	} catch(e) {
		console.error(e);
		throw e;
	}
};

export const isUniqueUserName = async(name: string) => {
	const result = <IUser>(await dbSource(getUser)({
		name,
	}));
	return !result || !result._id;
}
