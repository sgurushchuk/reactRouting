export function selectTodos(state) {
	return state.todosState;
}

export function selectIsLoading(state) {
	return state.statusFlagsState.isLoading;
}

export function selectRefreshList(state) {
	return state.statusFlagsState.refreshList;
}
