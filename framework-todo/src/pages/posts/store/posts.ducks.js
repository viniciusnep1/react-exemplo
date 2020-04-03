import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

export const {Types, Creators} = createActions({
	getPosts: ['params',  'callback'],
	readPosts: ['params'],

	getPostsDetails: ['params',  'callback'],
	readPostsDetails: ['params']

})

const INITIAL_STATE_VALUES = {
	data: []
};

const INITIAL_STATE = Immutable(Object.assign({}, INITIAL_STATE_VALUES));

const getPosts = (state = INITIAL_STATE, action) => state.merge({data: action.data})
const getPostsDetails = (state = INITIAL_STATE, action) => state.merge({data: action.data})

export default createReducer(INITIAL_STATE, {
	[Types.READ_POSTS]: getPosts,
	[Types.READ_POSTS_DETAILS]: getPostsDetails, 
})
