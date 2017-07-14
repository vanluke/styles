import * as convict from 'convict';

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
	},
	db: {
		driver: {
			doc: 'driver',
		  format: '*',
		  default: '',
		  env: 'driver',
		},
		user: {
			doc: 'user',
		  format: '*',
		  default: '',
		  env: 'user',
		},
		password: {
			doc: 'password',
		  format: '*',
		  default: '',
		  env: 'password',
		},
		host: {
			doc: 'host',
		  format: '*',
		  default: '',
		  env: 'host',
		},
		name: {
			doc: 'name',
			format: '*',
			default: '',
			env: 'name',
		},
	}
});

const env = config.get('env');
config.loadFile(`./server/config/${env}.json`);
config.validate({ allowed: 'strict' });

export default config;
