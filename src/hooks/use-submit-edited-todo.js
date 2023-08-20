import { useDispatch } from 'react-redux';
import { UPDATE_REFRESH_LIST_FLAG } from '../actions';

export function useSubmitEditedTodo(refreshList) {
	const dispatch = useDispatch();

	function submitEditedTodo(title, id) {
		fetch(`http://localhost:3004/tasks/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, isEditing: false }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				dispatch(UPDATE_REFRESH_LIST_FLAG);
			});
	}

	return { submitEditedTodo };
}
