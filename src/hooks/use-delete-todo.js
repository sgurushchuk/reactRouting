export function useDeleteTodo(refreshList) {
	function deleteTodo(id) {
		fetch(`http://localhost:3004/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Task deleted ', response);
				refreshList();
			});
	}

	return deleteTodo;
}
