import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	textarea,
	button,
	input {
		outline: none;
		box-sizing: border-box;
	}

	body {
		padding: 0px;
		margin: 0px;
		font-family: ${props => props.theme.global_font_family};
		background: ${props => props.theme.page_background};
	}
`;
