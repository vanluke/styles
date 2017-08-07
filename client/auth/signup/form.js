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
} from 'auth/form';

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
		/>

		<Field
			component={FormField}
			name="name"
			id="name"
			type="text"
			fullWidth
			hasPadding
			placeholder="Name"
			label="Name"
		/>

		<Field
			component={FormField}
			name="dateOfBirth"
			id="dateOfBirth"
			type="text"
			fullWidth
			hasPadding
			placeholder="DD-MM-YYYY"
			label="Date Of Birth"
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
})(Signup);
