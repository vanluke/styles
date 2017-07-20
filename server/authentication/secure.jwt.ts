import {jwtConfig} from './authentication.service';
import {
	prefix,
	version,
} from '../app/settings';

export const regexp = `^\/${prefix}\/v${version}\/public/`;

export default (app: any) => app.use(jwtConfig.unless({ path: [new RegExp(regexp, 'i')] }));
