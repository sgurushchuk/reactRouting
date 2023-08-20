import { useAddTodo } from '../../hooks';
import styles from './TodoInput.module.css';
import { useState } from 'react';

export function TodoInput() {
	const [inputValue, setInputValue] = useState('');
  const { addTodo } = useAddTodo();

	function handleSubmit(e) {
		e.preventDefault();
		if (inputValue === '') return;
		addTodo(inputValue.trim());
		setInputValue('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				type="text"
				placeholder="New todo"
			/>
			<button className={styles.addBtn}>Add</button>
		</form>
	);
}