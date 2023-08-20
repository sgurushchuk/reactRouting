import styles from './TodoList.module.css';
import { TodoItem } from '../TodoItem';
import { EditTodo } from '../EditTodo';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../selectors/selectors';


export function TodoList() {
  const todos = useSelector(selectTodos)

	return (
		<ul className={styles.todosList}>
      {todos.length > 0 
        ? todos.map((todo) =>
          todo.isEditing 
          ? (
            <EditTodo 
              todo={todo} 
              key={todo.id} />
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