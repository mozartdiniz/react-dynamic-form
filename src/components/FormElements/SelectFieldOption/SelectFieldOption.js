import React from 'react';
import PropTypes from 'prop-types';

export const SelectFieldOption = ({ label, name, dataQaId, value }) => (
	<option value={value} name={name} data-qa-id={dataQaId}>
		{label}
	</option>
);

SelectFieldOption.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	dataQaId: PropTypes.string
};

export default SelectFieldOption;
