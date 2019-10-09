import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './EmailField.styled';

export const EmailField = ({
	label,
	name,
	dataQaId,
	onChangeCallback,
	isRequired
}) => (
	<FormItemWrapper label={label} name={name} isRequired={isRequired}>
		<StyledInput
			type="email"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
	</FormItemWrapper>
);

EmailField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default EmailField;
