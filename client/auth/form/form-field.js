import React from 'react';
import PropTypes from 'prop-types';
import {
	AuthFieldset,
	AuthLabel,
	AuthInput,
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
}) => (<AuthFieldset>
		<AuthLabel labelType={type} htmlFor={id}>{label}</AuthLabel>
		<AuthInput
			fullWidth={fullWidth}
			hasPadding={hasPadding}
			id={id}
			type={type}
			placeholder={placeholder}
			{...input}
		></AuthInput>
	</AuthFieldset>);

FormField.propTypes = {
	text: PropTypes.string.isRequired,
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
	name: PropTypes.string.isRequired,
	fullWidth: PropTypes.bool.isRequired,
	hasPadding: PropTypes.bool.isRequired,
	placeholder: PropTypes.string.isRequired,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]).isRequired,
}
