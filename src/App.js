import { useState } from 'react';
import styles from './App.module.css';
import { TodoInput, SearchTodos, TodoList } from './components';
import { TodoListContext } from './context';
import {
	useGetTodos,
	useAddTodo,
	useDeleteTodo,
	useSubmitEditedTodo,
	useSearchTodo,
	useSetEditForTodo,
	useSortTodos,
} from './hooks';

export default function App() {
	const [refreshListFlag, setRefreshListFlag] = useState(false);
	const [inputSearchValue, setInputSearchValue] = useState('');
	const { isLoading, todos, setTodos } = useGetTodos(refreshListFlag);
	const { isCreating, addTodo } = useAddTodo(refreshList);
	const { isUpdating, submitEditedTodo } = useSubmitEditedTodo(refreshList);
	const setEditForTodo = useSetEditForTodo(todos, setTodos);
	const deleteTodo = useDeleteTodo(refreshList);
	const searchTodo = useSearchTodo(setTodos);
	const sortTodos = useSortTodos(setTodos);

	function refreshList() {
		setRefreshListFlag((refreshListFlag) => !refreshListFlag);
	}

	return (
		<>
			<div className={styles.App}>
				<TodoInput addTodo={addTodo} isCreating={isCreating} />
				<h1>Todo list</h1>
				<SearchTodos
					searchTodo={searchTodo}
					sortTodos={sortTodos}
					inputSearchValue={inputSearchValue}
					setInputSearchValue={setInputSearchValue}
				/>
				{isLoading ? (
					<div className={styles.loader}>Loading...</div>
				) : (
					<TodoListContext.Provider
						value={{ submitEditedTodo, deleteTodo, setEditForTodo, isUpdating }}
					>
						<TodoList todos={todos} />
					</TodoListContext.Provider>
				)}
			</div>
		</>
	);
}
