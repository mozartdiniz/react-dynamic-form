// API search function
export function searchCharacters(search) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${search}`, {
		method: 'GET'
	})
		.then(r => r.json())
		.catch(error => {
			console.error(error);
			return [];
		});
}
