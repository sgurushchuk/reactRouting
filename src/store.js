import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { todos } from './reducers/todos';
import { statusFlags } from './reducers/statusFlags';

const reducer = combineReducers({
	todosState: todos,
	statusFlagsState: statusFlags,
});

export const store = createStore(reducer, applyMiddleware(thunk));
