import styled from 'styled-components';

export const LineWrapper = styled.div`
	overflow: visible;
	position: relative;
	margin-bottom: 12px;
	padding: 0;
	clear: both;

	label {
		color: ${props => props.theme.form_label_text_color};
		float: left;
		font-size: ${props => props.theme.form_label_text_size};
		margin-right: 12px;
		padding: 0.4em 0 0;
		text-align: ${props => props.theme.form_label_text_align || 'left'};
		width: ${props => props.theme.form_label_width};
	}
`;


export const RequiredMark = styled.span`
	color: ${props => props.theme.form_required_mark_color};
	font-size: ${props => props.theme.form_required_mark_size};
	margin-left: 3px;
`;

export const Caption = styled.div`
	color: ${props => props.theme.form_caption_color};
	font-size: 9pt;
	font-style: italic;
	margin: ${props => props.theme.form_caption_margin};
	max-width: ${props => props.theme.form_caption_max_width};
	padding: ${props => props.theme.form_caption_padding};
`
