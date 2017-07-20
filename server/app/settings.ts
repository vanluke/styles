import config from '../config/app-config';

export const prefix = 'api';
export const version = config.get('version');
export const endpoint = () => `/${prefix}/v${version}`;
