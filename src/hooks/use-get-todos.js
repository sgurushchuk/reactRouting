import { useEffect, useState } from 'react';

export function useGetTodos(refreshListFlag) {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3004/tasks')
			.then((data) => data.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => {
				setIsLoading(false);
			});
	}, [refreshListFlag, setTodos]);

	return { isLoading, todos, setTodos };
}
