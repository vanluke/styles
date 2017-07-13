import * as https from 'https';
import config from '../config/app-config';

const host = config.get('host');
const port = config.get('port');
const version = config.get('version');
const passphrase = config.get('passpharse');

export default function (options: any, app: any) {
	return https.createServer({
		key: options.key,
		cert: options.cert,
		passphrase,
	}, app.callback()).listen(port, host);
}
