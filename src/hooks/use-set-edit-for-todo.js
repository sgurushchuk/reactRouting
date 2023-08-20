import { useDispatch } from 'react-redux';
import { setEditForTodoAction } from '../actions/setEditForTodo';

export function useSetEditForTodo() {
	const dispatch = useDispatch();
	function setEditForTodo(id) {
		dispatch(setEditForTodoAction(id));
	}

	return setEditForTodo;
}
