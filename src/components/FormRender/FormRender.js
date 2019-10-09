import React from 'react';
import PropTypes from 'prop-types';
import * as UI from '../FormElements';

import { kebabToCamelCase } from './FormRender.helpers';

const parseFormLayout = (
	formLayout,
	translations,
	onChangeCallback,
	goToNextPage,
	pages
) =>
	formLayout.map(formItem => {
		const {
			label,
			name,
			dataQaId,
			isRequired,
			caption,
			value,
			placeholder,
			isChecked,
			type,
			items
		} = formItem;

		const translatedLabel =
			translations && translations[label] ? translations[label] : label;
		const translatedCaption =
			translations && translations[caption] ? translations[caption] : caption;
		const translatedPlaceholder =
			translations && translations[placeholder] ? translations[placeholder] : placeholder;
		const componentName = kebabToCamelCase(type);
		const children =
			items && items.length
				? parseFormLayout(items, translations, onChangeCallback)
				: null;

		return UI[componentName]({
			label: translatedLabel,
			name,
			dataQaId,
			isRequired,
			caption: translatedCaption,
			isChecked,
			value,
			placeholder: translatedPlaceholder,
			onChangeCallback,
			goToNextPage,
			pages,
			children
		});
	});

export const FormRender = ({
	formLayout,
	translations,
	onChangeCallback,
	goToNextPage,
	pages
}) => (
	<div>
		{parseFormLayout(
			formLayout,
			translations,
			onChangeCallback,
			goToNextPage,
			pages
		)}
	</div>
);

FormRender.defaultProps = {
	formLayout: [],
	translations: null,
	onChangeCallback: () => {},
	goToNextPage: () => {}
};

FormRender.propTypes = {
	formLayout: PropTypes.arrayOf(PropTypes.object),
	translations: PropTypes.object,
	onChangeCallback: PropTypes.func,
	goToNextPage: PropTypes.func
};
