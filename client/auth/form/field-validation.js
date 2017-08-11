export const required = value => value ? undefined : 'Required';

const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined

export const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength15 = maxLength(15);

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined;

export const minValue18 = minValue(18);

export const minLength12 = minLength(12);

export const minLength6 = minLength(6);

export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'Invalid email address' : undefined;

export const isDate = value => (new Date(value) !== 'Invalid Date');

export const date = value => !isDate(value) ? 'Invalid Date' : undefined;
