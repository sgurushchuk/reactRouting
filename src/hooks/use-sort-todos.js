export function useSortTodos(todos, setTodos) {
	function sortTodos() {
		let sortedTodos = [...todos];
		sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
		setTodos(sortedTodos);
	}

	return sortTodos;
}
