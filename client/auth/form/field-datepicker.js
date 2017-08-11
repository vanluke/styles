import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
	AuthFieldset,
	AuthLabel,
	AuthErrorMessage,
	AuthDatePicker,
	AuthDateLabel,
} from 'auth/form-styled';
import config from 'config/config';
import './react-datepicker-overrides.scss';

export const parseStateToValue = state => moment(state, config.dateFormat);
export const formatValueToState = value => value.format(config.dateFormat);

export const FormDatePicker = ({input, icon, type, id, label, dateForm, placeholder, defaultValue, meta: { touched, error }}) => (
	<AuthFieldset>
		<AuthDateLabel htmlFor={id}>{label}</AuthDateLabel>
		<AuthDatePicker
			{...input}
			dateForm={dateForm}
			id={id}
			selected={input.value ? parseStateToValue(input.value) : null}
			onChange={value => input.onChange(formatValueToState(value))}
		/>
		{touched && error
			&& (<AuthErrorMessage isVisible={touched && error}>{error}</AuthErrorMessage>)}
	</AuthFieldset>);

FormDatePicker.propTypes = {
	input: PropTypes.shape({
		onChange: PropTypes.func,
		value: PropTypes.any,
	}),
	placeholder: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
	meta: PropTypes.shape({
		touched: PropTypes.bool,
		error: PropTypes.string,
	}).isRequired,
	dateForm: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

FormDatePicker.defaultProps = {
	defaultValue: '',
	dateForm: 'DD-MM-YYYY',
	icon: '',
	type: '',
};

export default FormDatePicker;
