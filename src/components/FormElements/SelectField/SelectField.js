import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledSelect } from './SelectField.style';

export const SelectField = ({
	label,
	name,
	dataQaId,
	children,
	onChangeCallback,
	isRequired
}) => (
	<FormItemWrapper label={label} name={name} isRequired={isRequired}>
		<StyledSelect name={name} data-qa-id={dataQaId} onChange={onChangeCallback}>
			{children}
		</StyledSelect>
	</FormItemWrapper>
);

SelectField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	children: PropTypes.node,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default SelectField;
