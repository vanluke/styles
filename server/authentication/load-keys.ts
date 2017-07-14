import * as fs from 'fs';

export const storage = {
  memo: {},
  set(key, data) {
    this.memo[key] = data;
  },
  get(key) {
    return this.memo[key];
  },
};

const privateKey = fs.readFileSync(`${__dirname}/secret/id_rsa`);

export const getKey = () => {
	const key = storage.get('private');
  if (key) {
    return key;
	}
  storage.set('private', privateKey);
  return storage.get('private');
};
