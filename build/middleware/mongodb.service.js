"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("./mongodb");
const assert = require("assert");
const app_config_1 = require("../config/app-config");
const db = app_config_1.default.get('db');
const uri = `${db.driver}://${db.user}:${db.password}${db.host}/${db.name}`;
exports.connect = (cb, params) => new Promise((resolve, reject) => {
    mongodb_1.MongoClient.connect(uri, (err, db) => {
        assert.equal(null, err);
        cb(db, params)
            .then((result) => {
            db.close();
            resolve(result);
        }).catch((error) => {
            db.close();
            reject(error);
        });
    });
});
exports.get = (db, collectionName) => db.collection(collectionName).find().toArray();
exports.update = (db, item, collectionName) => {
    const id = new mongodb_1.ObjectId(item._id);
    return new Promise((resolve, reject) => {
        db.collection(collectionName)
            .update({ _id: id }, {
            $set: Object.assign({}, item),
        }, item, (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};
exports.deleteDocument = (db, id, collectionName) => {
    const objectId = new mongodb_1.ObjectId(id);
    return new Promise((resolve, reject) => {
        db.collection(collectionName)
            .deleteOne({ _id: objectId }, (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};
exports.appendId = (item, results) => Object.assign({}, item, { _id: results.insertedId });
exports.create = (db, item, collectionName) => new Promise((resolve, reject) => {
    db.collection(collectionName)
        .insertOne(item, (err, results) => {
        if (err) {
            reject(err);
        }
        const response = exports.appendId(item, results);
        resolve(response);
    });
});
//# sourceMappingURL=mongodb.service.js.map