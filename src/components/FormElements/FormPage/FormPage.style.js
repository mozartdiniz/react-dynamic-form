import styled from 'styled-components';

export const FormWrapper = styled.div`
	border: ${props => props.theme.form_container_border};
	width: ${props => props.theme.form_container_width};
	background: ${props => props.theme.form_container_background};
	margin: auto;
`;

export const FormInnerContainer = styled.div`
	padding: 20px;
`;

export const PageTitle = styled.h1`
	background: ${props => props.theme.page_title_background};
	color: ${props => props.theme.page_title_text_color};
	font-size: ${props => props.theme.page_title_text_size};
	margin: 0;
	padding: 10px;
`;

export const PageCaption = styled.div`
	padding-top: 10px;
    font-size: 85%;
    color: #808080;
	margin: 0 0 20px;
`;

export const ButtonWrapper = styled.div`
	margin-bottom: 20px;
	margin-top: 30px;

	button {
		cursor: pointer;
		font-weight: 500;
		font-size: ${props => props.theme.next_page_button_text_size};
		box-shadow: ${props => props.theme.next_page_button_box_shadow};
		text-shadow: ${props => props.theme.next_page_button_text_shadow};
		background: ${props => props.theme.next_page_button_background};
		border: ${props => props.theme.next_page_button_border};
		border-radius: 6px;
		color: ${props => props.theme.next_page_button_text_color};
		display: block;
		height: 46px;
		margin: 0 auto;
		width: 160px;
	}
`;
