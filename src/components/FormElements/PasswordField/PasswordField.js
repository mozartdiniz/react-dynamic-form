import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './PasswordField.style';

export const PasswordField = ({
	label,
	name,
	dataQaId,
	onChangeCallback,
	isRequired
}) => (
	<FormItemWrapper label={label} name={name} isRequired={isRequired}>
		<StyledInput
			type="password"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
	</FormItemWrapper>
);

PasswordField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default PasswordField;
