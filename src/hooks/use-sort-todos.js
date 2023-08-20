import { useDispatch } from 'react-redux';
import { SORT_TODOS } from '../actions/sortTodos';

export function useSortTodos(todos, setTodos) {
	const dispatch = useDispatch();
	function sortTodos() {
		dispatch(SORT_TODOS);
	}
	return sortTodos;
}
