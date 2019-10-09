import styled from 'styled-components';

export const StyledInput = styled.input`
	border: ${props => props.theme.form_input_border};
	color: ${props => props.theme.form_input_text_color};
	font-size: ${props => props.theme.form_input_text_size};
	width: ${props => props.theme.form_input_width};
    border-radius: ${props => props.theme.form_input_border_radius};
    margin-top: 2px;
    overflow: hidden;
    padding: ${props => props.theme.form_input_padding};
`;

