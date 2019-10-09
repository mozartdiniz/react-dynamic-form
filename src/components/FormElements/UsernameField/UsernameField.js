import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { searchCharacters } from './searchCharacters';
import { useDebounce } from './useDebounce.hook';
import FormItemWrapper from '../FormItemWrapper';
import { StyledInput } from './UsernameField.syle';

export const UsernameField = ({ label, name, dataQaId, isRequired }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const [results, setResults] = useState([]);

	const [isSearching, setIsSearching] = useState(false);

	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	useEffect(
		() => {
			// Make sure we have a value (user has entered something in input)
			if (debouncedSearchTerm) {
				// Set isSearching state
				setIsSearching(true);
				// Fire off our API call
				searchCharacters(debouncedSearchTerm).then(results => {
					// Set back to false since request finished
					setIsSearching(false);
					// Set results state
					setResults(results);
				});
			} else {
				setResults([]);
			}

			console.log(results);
		},
		// This is the useEffect input array
		// Our useEffect function will only execute if this value changes ...
		// ... and thanks to our hook it will only change if the original ...
		// value (searchTerm) hasn't changed for more than 500ms.
		[debouncedSearchTerm]
	);

	return (
		<FormItemWrapper label={label} name={name} isRequired={isRequired}>
			<StyledInput
				type="text"
				name={name}
				data-qa-id={dataQaId}
				onChange={e => setSearchTerm(e.target.value)}
			/>
		</FormItemWrapper>
	);
};

UsernameField.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string,
	dataQaId: PropTypes.string
};

export default UsernameField;
