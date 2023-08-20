import { UPDATE_ISLOADING_FLAG } from './updateFlags';

export const getTodos = () => {
	return (dispatch) => {
		dispatch(UPDATE_ISLOADING_FLAG);
		return fetch('http://localhost:3004/tasks')
			.then((data) => data.json())
			.then((loadedTodos) =>
				dispatch({
					type: 'GET_TODOS',
					payload: loadedTodos,
				}),
			)
			.finally(() => {
				dispatch(UPDATE_ISLOADING_FLAG);
			});
	};
};
