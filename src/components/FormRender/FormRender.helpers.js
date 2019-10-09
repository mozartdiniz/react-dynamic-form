export const kebabToCamelCase = kebabText =>
	kebabText
		.split('-')
		.map(i => {
			const [head, ...rest] = i;

			return `${head.toUpperCase()}${rest.join('')}`;
		})
		.join('');
