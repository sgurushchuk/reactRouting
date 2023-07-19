import { useState } from 'react';

export function useAddTodo(refreshList) {
	const [isCreating, setIsCreating] = useState(false);

	function addTodo(title) {
		setIsCreating(true);
		fetch('http://localhost:3004/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, isEditing: false }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				refreshList();
			})
			.finally(setIsCreating(false));
	}

	return { isCreating, addTodo };
}
