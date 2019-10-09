import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { ChildrenWrapper } from './DateField.style';

export const DateField = ({
	label,
	name,
	dataQaId,
	children,
	isRequired,
	caption
}) => (
	<FormItemWrapper
		label={label}
		name={name}
		isRequired={isRequired}
		caption={caption}
	>
		<ChildrenWrapper>{children}</ChildrenWrapper>
	</FormItemWrapper>
);

DateField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	children: PropTypes.node,
	caption: PropTypes.string,
	dataQaId: PropTypes.string
};

export default DateField;
