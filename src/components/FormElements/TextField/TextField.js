import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './TextField.styled';

export const TextField = ({
	label,
	name,
	caption,
	dataQaId,
	placeholder,
	isRequired,
	onChangeCallback
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isRequired={isRequired}
		caption={caption}
	>
		<StyledInput
			type="text"
			name={name}
			placeholder={placeholder}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
	</FormItemWrapper>
);

TextField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	caption: PropTypes.string,
	placeholder: PropTypes.string,
	dataQaId: PropTypes.string,
	isRequired: PropTypes.bool,
	onChangeCallback: PropTypes.func
};

export default TextField;
