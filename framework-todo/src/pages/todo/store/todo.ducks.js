import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

export const {Types, Creators} = createActions({
	getTodos: ['params',  'callback'],
	readTodos: ['params'],

	createTodos: ['params', 'callback'],
	postTodos: ['params'],
})

const INITIAL_STATE_VALUES = {
	data: []
};

const INITIAL_STATE = Immutable(Object.assign({}, INITIAL_STATE_VALUES));

const getTodos = (state = INITIAL_STATE, action) => state.merge({data: action.data})
const createTodos = (state = INITIAL_STATE, action) => state.merge({data: action.data})

export default createReducer(INITIAL_STATE, {
	[Types.READ_TODOS]: getTodos,
	[Types.POST_TODOS]: createTodos
})
