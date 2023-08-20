import { useDispatch } from 'react-redux';
import { searchTodos } from '../actions/searchTodos';

export function useSearchTodo() {
	const dispatch = useDispatch();

	function searchTodo(searchValue) {
		dispatch(searchTodos(searchValue));
	}

	return searchTodo;
}
