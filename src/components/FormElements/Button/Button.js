import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ label }) => (
	<div>
		<button>{label}</button>
	</div>
);

Button.propTypes = {
	label: PropTypes.string
};

export default Button;
