import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import { TodoInput, SearchTodos, TodoList } from './components';
import { getTodos } from './actions';
import { selectIsLoading, selectRefreshList } from './selectors/selectors';

export default function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const refreshList = useSelector(selectRefreshList);

	useEffect(() => {
		dispatch(getTodos());
	}, [refreshList, dispatch]);

	return (
		<>
			<div className={styles.App}>
				<TodoInput />
				<h1>Todo list</h1>
				<SearchTodos />
				{isLoading ? (
					<div className={styles.loader}>Loading...</div>
				) : (
					<TodoList />
				)}
			</div>
		</>
	);
}
