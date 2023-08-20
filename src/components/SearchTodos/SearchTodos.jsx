import { useSearchTodo, useSortTodos } from '../../hooks';
import styles from './SearchTodos.module.css';
import { useState } from 'react';

export function SearchTodos() {

	const [inputSearchValue, setInputSearchValue] = useState('');
  const searchTodo = useSearchTodo();
  const sortTodos = useSortTodos();

	return (
    <><form className={styles.searchForm}>
      <div className={styles.inputSearchWrapper}>
        &#x1F50E;
        <input
        className={styles.searchInput}
        value={inputSearchValue}
        onChange={(e) => {
          searchTodo(e.target.value);
          setInputSearchValue(e.target.value)
        }
        }
        type="text"
        placeholder="Search for todo"
        />
      </div>
    </form>
    <div className={styles.sortWrapper}>
      <button onClick={sortTodos} className={styles.sortBtn}>↓↑</button>
    </div>
    </>
	);
}