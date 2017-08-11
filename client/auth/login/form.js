import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
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
	required,
	minLength6,
	minLength12,
} from 'auth/form';

export const Login = ({handleSubmit, isVisible}) => (<AuthContainer isVisible={isVisible}>
	<AuthForm onSubmit={handleSubmit}>
		<Field
			component={FormField}
			name="name"
			id="name"
			type="text"
			fullWidth
			hasPadding
			icon="username"
			placeholder="Name"
			label="Name"
			validate={[required, minLength6]}
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
			validate={[required, minLength12]}
		/>

		<Field
			component={FormCheckbox}
			id="remember-me"
			name="rememberMe"
			text="Remember me"
		/>

		<AuthFieldset>
			<AuthButton type="submit">Login</AuthButton>
		</AuthFieldset>
	</AuthForm>
	</AuthContainer>);

Login.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'loginForm',
})(Login);
