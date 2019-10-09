import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';

export const SearchAddressField = ({
	label,
	name,
	dataQaId,
	onChangeCallback,
	isRequired
}) => (
	<FormItemWrapper label={label} name={name} isRequired={isRequired}>
		<input
			type="text"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
	</FormItemWrapper>
);

SearchAddressField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default SearchAddressField;
