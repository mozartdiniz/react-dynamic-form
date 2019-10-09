import React from 'react';
import PropTypes from 'prop-types';

import FormItemWrapper from '../FormItemWrapper';
import { GroupWrapper } from './RadiogroupField.style';

export const RadiogroupField = ({ label, name, children, isRequired }) => (
	<FormItemWrapper label={label} name={name} isRequired={isRequired}>
		<GroupWrapper>
			<div>{children}</div>
		</GroupWrapper>
	</FormItemWrapper>
);

RadiogroupField.propTypes = {
	label: PropTypes.string,
	children: PropTypes.node
};

export default RadiogroupField;
