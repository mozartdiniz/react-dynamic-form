import React from 'react';
import PropTypes from 'prop-types';

import { LineWrapper, RequiredMark, Caption } from './FormItemWrapper.style';

export const FormItemWrapper = ({
	label,
	name,
	children,
	isRequired,
	caption
}) => (
	<LineWrapper id={name}>
		{ caption ? <Caption>{caption}</Caption> : null }
		<label htmlFor={name}>
			{label}
			{isRequired ? <RequiredMark>*</RequiredMark> : null}
		</label>
		{children}
	</LineWrapper>
);

FormItemWrapper.propTypes = {
	caption: PropTypes.string,
	children: PropTypes.node,
	isRequired: PropTypes.bool,
	label: PropTypes.string,
	name: PropTypes.string
};
