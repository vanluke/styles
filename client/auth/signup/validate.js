export const validate = values => {
	const errors = {}
	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length < 12) {
		errors.password = 'Must be 12 characters or more';
	}
	if (!values.repassword) {
		errors.repassword = 'Required';
	} else if (values.repassword.length < 12) {
		errors.repassword = 'Invalid email address';
	}
	if (values.repassword !== values.password) {
		errors.repassword = 'Password does not match!'
	}
	return errors;
};
