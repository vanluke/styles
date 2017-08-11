import React from 'react';
import PropTypes from 'prop-types';
import {
	AuthFieldset,
	AuthLabel,
	AuthInput,
	AuthErrorMessage,
} from 'auth/form-styled';

export const FormField = ({
	id,
	type,
	name,
	fullWidth,
	hasPadding,
	placeholder,
	label,
	input,
	meta,
	icon,
}) => (<AuthFieldset>
		<AuthLabel labelType={icon || type} htmlFor={id}>{label}</AuthLabel>
		<AuthInput
			fullWidth={fullWidth}
			hasPadding={hasPadding}
			id={id}
			type={type}
			placeholder={placeholder}
			{...input}
		></AuthInput>
		{meta.touched && meta.error
			&& (<AuthErrorMessage isVisible={meta.touched && meta.error}>{meta.error}</AuthErrorMessage>)}
	</AuthFieldset>);

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	input: PropTypes.shape({
		onChange: PropTypes.func,
		value: PropTypes.any,
		meta: PropTypes.shape({
			error: PropTypes.string,
			touched: PropTypes.bool,
		})
	}).isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string,
	fullWidth: PropTypes.bool.isRequired,
	hasPadding: PropTypes.bool.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]).isRequired,
	meta: PropTypes.shape({
		error: PropTypes.string,
		warning: PropTypes.string,
		touched: PropTypes.bool,
	}).isRequired,
	icon: PropTypes.string,
};

FormField.defaultProps = {
	icon: '',
	name: '',
};
