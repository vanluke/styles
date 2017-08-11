import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
	AuthContainer,
	AuthForm,
	AuthFieldset,
	AuthLabel,
	AuthPasswordLabel,
	AuthUsernameLabel,
	AuthInput,
	AuthErrorMessage,
	AuthCheckbox,
	AuthCheckboxLabel,
	AuthButton,
} from 'auth/form-styled';
import {
	FormCheckbox,
	FormField,
	FormDatePicker,
	required,
	minLength6,
	email,
	minLength12,
	date,
} from 'auth/form';
import {validate} from './validate';

export const Signup = ({ handleSubmit, isVisible }) => (<AuthContainer isVisible={isVisible}>
	<AuthForm onSubmit={handleSubmit}>
		<Field
			component={FormField}
			name="email"
			id="email"
			type="email"
			fullWidth
			hasPadding
			placeholder="E-mail"
			label="E-mail"
			validate={[required, email]}
		/>

		<Field
			component={FormField}
			name="name"
			id="name"
			type="text"
			fullWidth
			icon="username"
			hasPadding
			placeholder="Name"
			label="Name"
			validate={[required, minLength6]}
		/>

		<Field
			component={FormDatePicker}
			name="dateOfBirth"
			id="dateOfBirth"
			type="text"
			fullWidth
			hasPadding
			placeholder="DD-MM-YYYY"
			label="Date Of Birth"
			validate={[required, date]}
		/>

		<Field
			component={FormField}
			id="password"
			name="password"
			type="password"
			fullWidth
			hasPadding
			placeholder="Password"
			label="Password"
			validate={[required]}
		/>

		<Field
			component={FormField}
			id="repassword"
			name="repassword"
			type="password"
			fullWidth
			hasPadding
			placeholder="Retype password"
			label="Retype password"
			validate={[required]}
		/>

		<AuthFieldset>
			<AuthButton type="submit">Signup</AuthButton>
		</AuthFieldset>
	</AuthForm>
</AuthContainer>);

Signup.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'signupForm',
	touchOnChange: true,
	validate,
	initialValues: {
		password: '',
		email: '',
		repassowrd: '',
		dateOfBirth: '',
		name: '',
	},
})(Signup);
