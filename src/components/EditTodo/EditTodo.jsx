import styles from './EditTodo.module.css';
import { useContext, useState } from 'react';
import {TodoListContext} from '../../context';

export function EditTodo({ todo }) {
	const [inputValue, setInputValue] = useState(todo.title);
  const { submitEditedTodo, isUpdating } = useContext(TodoListContext)

	function handleSubmit(e) {
		e.preventDefault();
		if (inputValue === '') return;
		submitEditedTodo(inputValue.trim(), todo.id);
	}

	return (
		<form className={styles.editTodoItem} onSubmit={handleSubmit}>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				type="text"
				placeholder="Edit todo"
			/>
			<button disabled={isUpdating} className={styles.submitBtn}>Submit</button>
		</form>
	);
}