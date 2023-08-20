import styles from './EditTodo.module.css';
import { useState } from 'react';
import {useSubmitEditedTodo} from '../../hooks';

export function EditTodo({ todo }) {
	const [inputValue, setInputValue] = useState(todo.title);
  const { submitEditedTodo } = useSubmitEditedTodo();

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
			<button className={styles.submitBtn}>Submit</button>
		</form>
	);
}