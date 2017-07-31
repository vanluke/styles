import React from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {
	LoginContainer,
	LoginForm,
	LoginFieldset,
	LoginEmailLabel,
	LoginPasswordLabel,
	LoginUsernameLabel,
	LoginInput,
	LoginErrorMessage,
	LoginCheckbox,
	LoginCheckboxLabel,
	LoginButton,
} from './form-styled';

export const FormField = ({
	id,
	type,
	name,
	fullWidth,
	hasPadding,
	placeholder,
	label,
	input,
}) => (<LoginFieldset>
	<LoginEmailLabel htmlFor={id}>{label}</LoginEmailLabel>
	<LoginInput
		fullWidth={fullWidth}
		hasPadding={hasPadding}
		id={id}
		type={type}
		placeholder={placeholder}
		{...input}
	></LoginInput>
</LoginFieldset>);
export const FormCheckbox = ({
	text,
	id,
	input,
}) => (<LoginFieldset>
	<LoginCheckbox
		type="checkbox"
		id={id}
		{...input}
	/>
	<LoginCheckboxLabel htmlFor={id}>{text}</LoginCheckboxLabel>
</LoginFieldset>);

export const Login = ({handleSubmit, isVisible}) => (<LoginContainer isVisible={isVisible}>
	<LoginForm onSubmit={handleSubmit}>
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
			id="password"
			name="password"
			type="password"
			fullWidth
			hasPadding
			placeholder="Password"
			label="Password"
		/>

		<Field
			component={FormCheckbox}
			id="remember-me"
			name="rememberMe"
			text="Remember me"
		/>

		<LoginFieldset>
			<LoginButton type="submit">Login</LoginButton>
		</LoginFieldset>
	</LoginForm>
	</LoginContainer>);

Login.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	isVisible: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'loginForm',
})(Login);
