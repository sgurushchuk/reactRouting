import { useDispatch } from 'react-redux';
import { UPDATE_REFRESH_LIST_FLAG } from '../actions';

export function useAddTodo() {
	const dispatch = useDispatch();

	function addTodo(title) {
		fetch('http://localhost:3004/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ title, isEditing: false }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				dispatch(UPDATE_REFRESH_LIST_FLAG);
			});
	}

	return { addTodo };
}
