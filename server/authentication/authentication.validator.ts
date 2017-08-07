import validate from 'koa-req-validator';
import * as validator from 'validator';
import {isUniqueUserName} from './authentication.service';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginValidate = async ({
	name,
	password,
}) => {
	const validationErrors = [];
	if (!password || password.length <= 3) {
		validationErrors.push({
			isValid: false,
			message: 'Password is required!',
		});
	}
	if (!name) {
		validationErrors.push({
			isValid: false,
			message: 'Name is required!',
		});
	}
	return {
		isValid: validationErrors.length === 0,
		validationErrors,
	};
};

export const sigupValidate = async ({
	createdAt,
	email,
	password,
	repassword,
	name,
}) => {
	const validationErrors = [];
	if(!name) {
		validationErrors.push({
			isValid: false,
			message: 'Name is required!',
		});
	}
	if (!(await isUniqueUserName(name))) {
		validationErrors.push({
			isValid: false,
			message: `Name must be unique! ${name} already exists.`,
		});
	}
	if (!email) {
		validationErrors.push({
			isValid: false,
			message: 'Email is required!',
		});
	}
	if (!emailRegex.test(email)) {
		validationErrors.push({
			isValid: false,
			message: `${email} is not an email address!`,
		});
	}
	if (!password) {
		validationErrors.push({
			isValid: false,
			message: 'Password is required!',
		});
	}
	if (!repassword) {
		validationErrors.push({
			isValid: false,
			message: 'RePassword is required!',
		});
	}
	if (repassword !== password) {
		validationErrors.push({
			isValid: false,
			message: 'Provided password does not match',
		});
	}
	return {
		isValid: validationErrors.length === 0,
		validationErrors,
	};
};
