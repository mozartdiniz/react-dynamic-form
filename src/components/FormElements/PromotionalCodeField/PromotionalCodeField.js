import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';

export const PromotionalCodeField = ({
	label,
	name,
	caption,
	dataQaId,
	onChangeCallback,
	isRequired
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isRequired={isRequired}
		caption={caption}
	>
		<input
			type="text"
			name={name}
			data-qa-id={dataQaId}
			onChange={onChangeCallback}
		/>
	</FormItemWrapper>
);

PromotionalCodeField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	caption: PropTypes.string,
	dataQaId: PropTypes.string,
	onChangeCallback: PropTypes.func
};

export default PromotionalCodeField;
