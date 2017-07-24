import {composeWithDevTools} from 'redux-devtools-extension';

const env = process && process.env && process.env.NODE_ENV;

console.log('ENV is ', env);
export default function() {
	return env === 'development'
		? composeWithDevTools
		: (arg) => arg;
}
