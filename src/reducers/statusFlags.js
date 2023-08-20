export const initialState = {
	isLoading: false,
	refreshList: false,
};

export function statusFlags(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_ISLOADING_FLAG': {
			return { ...state, isLoading: !state.isLoading };
		}
		case 'UPDATE_REFRESH_LIST_FLAG': {
			return { ...state, refreshList: !state.refreshList };
		}
		default:
			return state;
	}
}
