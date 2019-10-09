export const makePages = (formLayout, translations) => {
	if (!formLayout) {
		return [];
	}

	return formLayout
		.filter(formItem => formItem.type === 'form-page')
		.map((formItem, index) => {
			const { type, label } = formItem;
			const translatedLabel = translations[label];
			const isTheFirstPage = !index;

			return {
				type,
				label: translatedLabel,
				isActive: isTheFirstPage
			};
		});
};

export const nextPage = (currentPage, pages) => {
	const pagesCopy = [...pages];

	pagesCopy.forEach((page, index) => {
		if (page.label === currentPage.label && pagesCopy[index + 1]) {
			pagesCopy[index].isActive = false;
			pagesCopy[index + 1].isActive = true;
		}
	});

	return pagesCopy;
};

export const fetchData = async (language, venture) => {
	const formLayoutResponse = await fetch(
		`http://localhost:3000/api/v1/formLayout?v=${venture}`
	);
	const translationResponse = await fetch(
		`http://localhost:3000/api/v1/translation?language=${language}`
	);

	const styleResponse = await fetch(
		`http://localhost:3000/api/v1/style?v=${venture}`
	);

	const formLayout = await formLayoutResponse.json();
	const translations = await translationResponse.json();
	const styles = await styleResponse.json();

	return {
		formLayout,
		translations,
		styles
	};
};

export const createBaseFormData = formLayout => {
	return Object.assign({}, ...formLayout.map((formItem) => formItem.items)
		.reduce((prev, curr) => prev.concat(curr), [])
		.map(({ isRequired, type, name }) => ({
			[name]: {
				isTouched: false,
				type,
				value: '',
				isRequired,
				isValid: true
			}
		})));
}

