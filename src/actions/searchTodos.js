export const searchTodos = (searchValue) => {
	return (dispatch) => {
		fetch('http://localhost:3004/tasks')
			.then((data) => data.json())
			.then((loadedTodos) => {
				dispatch({
					type: 'SEARCH_TODOS',
					payload: loadedTodos.filter((todo) =>
						todo.title.toLowerCase().includes(searchValue.toLowerCase()),
					),
				});
			});
	};
};
