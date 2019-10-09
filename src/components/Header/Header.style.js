import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background: ${props => props.theme.header_background};
	background-position: ${props => props.theme.header_background_position};
	height: 50px;
	border-bottom: ${props => props.theme.header_border_bottom};
	box-shadow: ${props => props.theme.header_border_shadow};
`;

export const NavigationButton = styled.div`
    background: transparent url(https://www.starspins.ppc2.pgt01.gamesysgames.com/assets/4.0.921/starspins/pages/mobile/skin/css/../img/toolbar-sprite.png) no-repeat -34px 0;
    background-position: -572px 0px;
    width: 70px;
    text-decoration: none;
    padding: 7px 25px;
    font-weight: normal;
    position: relative;
    float: left;
    height: 20px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const VentureLogo = styled.div`
	position: absolute;
    top: 0;
    left: -25px;
    background: ${props => props.theme.header_venture_logo};
    background-size: ${props => props.theme.header_venture_logo_size};
    width: 126px;
    height: 49px;
    display: block;
    margin: 0px auto;
    right: 0;
`;

export const HelpIcon = styled.div`
    border-left: none;
    float: right;
    overflow: hidden;
    background: url(https://www.starspins.ppc2.pgt01.gamesysgames.com/assets/4.0.921/starspins/pages/mobile/skin/img/toolbar-sprite.png);
    background-position: -438px 0;
    text-indent: -9999em;
    width: 32px;
    height: 32px;
    margin-top: 10px;
`;

export const VentureSelectorWrapper = styled.div`
	position: absolute;
    right: 50px;
    top: 14px;
`;
