export const initialState = [];

export function todos(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'GET_TODOS': {
			return payload;
		}
		case 'SEARCH_TODOS': {
			return payload;
		}
		case 'SET_EDIT_FOR_TODO': {
			return state.map((todo) =>
				todo.id === payload ? { ...todo, isEditing: true } : todo,
			);
		}
		case 'SORT_TODOS': {
			let sortedTodos = [...state];
			sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
			return sortedTodos;
		}
		default:
			return state;
	}
}
