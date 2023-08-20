import { useDispatch } from 'react-redux';
import { UPDATE_REFRESH_LIST_FLAG } from '../actions';

export function useDeleteTodo() {
	const dispatch = useDispatch();

	function deleteTodo(id) {
		fetch(`http://localhost:3004/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Task deleted ', response);
				dispatch(UPDATE_REFRESH_LIST_FLAG);
			});
	}

	return deleteTodo;
}
