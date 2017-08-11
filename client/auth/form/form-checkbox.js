import React from 'react';
import PropTypes from 'prop-types';
import {
	AuthFieldset,
	AuthCheckbox,
	AuthCheckboxLabel,
} from 'auth/form-styled';

export const FormCheckbox = ({
	text,
	id,
	input,
}) => (<AuthFieldset>
		<AuthCheckbox
			type="checkbox"
			id={id}
			{...input}
		/>
		<AuthCheckboxLabel htmlFor={id}>{text}</AuthCheckboxLabel>
	</AuthFieldset>);

FormCheckbox.propTypes = {
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
}
