import styled from 'styled-components';

export const StyledSelect = styled.select`
	background: white;
	width: ${props => props.theme.form_input_width};
	border-radius: ${props => props.theme.form_input_border_radius};
	border: ${props => props.theme.form_input_border};
	max-width: 100%;
	font-size: 13pt;
	height: 2em;
    padding: 0.3em 8px;
`
