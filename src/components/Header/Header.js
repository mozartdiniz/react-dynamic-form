import React from 'react';

import {
	HeaderContainer,
	NavigationButton,
	VentureLogo,
	VentureSelectorWrapper,
	HelpIcon
} from './Header.style';

export const Header = ({ onChangeCallback }) => {
	return (
		<HeaderContainer>
			<NavigationButton />
			<VentureLogo />
			<VentureSelectorWrapper>
				<select name="venture" onChange={ onChangeCallback }>
					<option value="jackpotjoy">Jackpotjoy</option>
					<option value="starspins">Starspins</option>
					<option value="whitelabel">White Label</option>
				</select>
			</VentureSelectorWrapper>
			<HelpIcon />
		</HeaderContainer>
	);
};
