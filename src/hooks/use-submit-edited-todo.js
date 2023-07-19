import { useState } from 'react';

export function useSubmitEditedTodo(refreshList) {
	const [isUpdating, setIsUpdating] = useState(false);

	function submitEditedTodo(title, id) {
		setIsUpdating(true);
		fetch(`http://localhost:3004/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, isEditing: false }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				refreshList();
			})
			.finally(setIsUpdating(false));
	}

	return { isUpdating, submitEditedTodo };
}
