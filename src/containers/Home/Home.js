import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import FormRender from '../../components/FormRender';
import Header from '../../components/Header';

import {
	makePages,
	nextPage,
	fetchData,
	createBaseFormData
} from './Home.helpers';
import { GlobalStyle } from './Home.style';

export const Home = () => {
	const [language, setLanguage] = useState('en');
	const [venture, setVenture] = useState('jackpotjoy');
	const [translations, setTranslations] = useState(null);
	const [layout, setLayout] = useState(null);
	const [styles, setStyles] = useState({});
	const [pages, setPages] = useState([]);
	const [formData, setFormData] = useState({});

	const loadData = async () => {
		const { formLayout, translations, styles } = await fetchData(
			language,
			venture
		);

		setFormData(formLayout ? createBaseFormData(formLayout) : {});
		setLayout(formLayout);
		setPages(makePages(formLayout, translations));
		setStyles(styles);
		setTranslations(translations);
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		loadData();
	}, [ venture ]);

	const headerOnChangeCallback = e => {
		const {
			target: { value }
		} = e;

		setVenture(value);
	};

	const setFormDataItemValue = e => {
		const {
			target: {
				name,
				value
			}
		} = e;

		setFormData({
			...formData,
			[name]: {
				...formData[name],
				value
			}
		});
	};

	const goToNextPage = currentPage => {
		setPages(nextPage(currentPage, pages));
	};

	return (
		<ThemeProvider theme={styles}>
			<Fragment>
				<GlobalStyle />
				<Header onChangeCallback={headerOnChangeCallback} />
				{layout && translations && (
					<FormRender
						formLayout={layout}
						pages={pages}
						translations={translations}
						goToNextPage={goToNextPage}
						onChangeCallback={setFormDataItemValue}
					/>
				)}

				<div>
					<h3>Current form state:</h3>
					{Object.keys(formData).map(i => (
						<div>
							<strong>{i}</strong>: {formData[i].value}
						</div>
					))}
				</div>
			</Fragment>
		</ThemeProvider>
	);
};

Home.propTypes = {
	base_api: PropTypes.shape({
		authToken: PropTypes.string.isRequired,
		memberId: PropTypes.string.isRequired,
		ventureName: PropTypes.string.isRequired
	}),
	theme: PropTypes.shape({
		breakpoints: PropTypes.shape({
			large: PropTypes.string.isRequired,
			desktop: PropTypes.string.isRequired
		}),
		wrapper: PropTypes.shape({
			paddingBottom: PropTypes.string.isRequired,
			paddingLeft: PropTypes.string.isRequired,
			paddingRight: PropTypes.string.isRequired,
			paddingTop: PropTypes.string.isRequired
		})
	})
};
