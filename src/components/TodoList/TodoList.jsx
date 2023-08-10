import styles from './TodoList.module.css';
import { TodoItem } from '../TodoItem';
import { EditTodo } from '../EditTodo';

export function TodoList({ todos }) {

	return (
		<ul className={styles.todosList}>
      {todos.length > 0 
        ? todos.map((todo) =>
          todo.isEditing 
          ? (
            <EditTodo key={todo.id} todo={todo} />
          ) : (
            <TodoItem
              todo={todo}
              key={todo.id}
            />
            ),
            ) : 'No todos'}
		</ul>
	);
}