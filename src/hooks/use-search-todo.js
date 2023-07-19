export function useSearchTodo(setTodos) {
	function searchTodo(searchValue) {
		fetch('http://localhost:3004/tasks')
			.then((data) => data.json())
			.then((loadedTodos) => {
				setTodos(
					loadedTodos.filter((todo) =>
						todo.title.toLowerCase().includes(searchValue.toLowerCase()),
					),
				);
			});
	}

	return searchTodo;
}
