import { useContext } from 'react';
import styles from './TodoItem.module.css';
import {TodoListContext} from '../../context';

export function TodoItem({ todo }) {
  const { deleteTodo, setEditForTodo } = useContext(TodoListContext);

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