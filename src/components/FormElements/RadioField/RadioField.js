import React from 'react';
import PropTypes from 'prop-types';

export const RadioField = ({
	label,
	name,
	value,
	isChecked,
	dataQaId,
	onChangeCallback
}) => (
	<div>
		<input
			type="radio"
			name={name}
			value={value}
			id={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
		<label>{label}</label>
	</div>
);

RadioField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	isChecked: PropTypes.bool,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default RadioField;
