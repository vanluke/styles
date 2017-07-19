import {MongoClient, ObjectId} from './mongodb';
import * as assert from 'assert';
import config from '../config/app-config';

export const db = config.get('db');
export const auth = config.get('authentication');

export const uri =
	`${db.driver}://${db.user}:${db.password}${db.host}/${db.name}`;

export const uriAuth =
	`${auth.driver}://${auth.user}:${auth.password}${auth.host}/${auth.name}`;

export const connect = connectionStrong => (cb: Function) => (...params: any[]) => new Promise((resolve, reject) => {
  MongoClient.connect(connectionStrong, (err, db) => {
		assert.equal(null, err);

    cb.apply(null, [db, ...params])
    .then((result) => {
      db.close();
      resolve(result);
    }).catch((error) => {
      db.close();
      reject(error);
    });
  });
});

export const getDocuments = (db: any, collectionName: string) => db.collection(collectionName).find().toArray();

export const update = (db, item, collectionName) => {
	const id = new ObjectId(item._id);
	delete item._id;
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
    .update({_id: id}, {
      $set: {
        ...item,
      },
    },
    item, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const deleteDocument = (db:any, id: string, collectionName: string) => {
	const objectId = new ObjectId(id);
  return new Promise((resolve, reject) => {
    db.collection(collectionName)
    .deleteOne({_id: objectId}, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const appendId = (item: any, results: any) =>
  Object.assign({}, item, { _id: results.insertedId });

export const create = (db: any, item: any, collectionName: string) => new Promise((resolve, reject) => {
    db.collection(collectionName)
    .insertOne(item, (err, results) => {
      if (err) {
        reject(err);
      }
      const response = appendId(item, results);
      resolve(response);
    });
	});

export const getDocument = (db: any, tripId, collectionName: string) => new Promise((resolve, reject) => {
	const objectId = new ObjectId(tripId);
	db.collection(collectionName).findOne({
		_id: objectId,
	}, (err, doc) => (err ? reject(err) : resolve(doc)));
});

export const findBy = (db: any, value: any, propName: string, collectionName: string) => new Promise((resolve, reject) => {
	db.collection(collectionName).findOne({
		[propName]: value,
	}, (err, doc) => (err ? reject(err) : resolve(doc)));
});
