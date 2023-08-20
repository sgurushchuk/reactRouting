import styles from './TodoItem.module.css';
import {useDeleteTodo, useSetEditForTodo} from '../../hooks';

export function TodoItem({ todo }) {
	const setEditForTodo = useSetEditForTodo();
	const deleteTodo = useDeleteTodo();

	return (
		<li className={styles.todoItem}>
			<span className={styles.itemTitle}>{todo.title}</span>
			<button className={styles.editBtn} onClick={() => setEditForTodo(todo.id)}>
				Edit
			</button>
			<button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>
				Delete
			</button>
		</li>
	);
}