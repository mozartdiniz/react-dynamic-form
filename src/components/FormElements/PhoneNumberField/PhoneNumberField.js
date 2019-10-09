import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';

export const PhoneNumberField = ({ label, children, isRequired, name }) => (
	<FormItemWrapper label={ label } name={ name } isRequired={ isRequired }>
		{ children }
	</FormItemWrapper>
);

PhoneNumberField.propTypes = {
	label: PropTypes.string,
	children: PropTypes.node
};

export default PhoneNumberField;
