export function useSetEditForTodo(todos, setTodos) {
	function setEditForTodo(id) {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: true } : todo,
			),
		);
	}

	return setEditForTodo;
}
