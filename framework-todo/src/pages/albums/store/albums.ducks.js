import Immutable from "seamless-immutable";
import { createActions, createReducer } from "reduxsauce";

export const {Types, Creators} = createActions({
	getAlbums: ['params',  'callback'],
	readAlbums: ['params'],

})

const INITIAL_STATE_VALUES = {
	data: []
};

const INITIAL_STATE = Immutable(Object.assign({}, INITIAL_STATE_VALUES));

const getAlbums = (state = INITIAL_STATE, action) => state.merge({data: action.data})

export default createReducer(INITIAL_STATE, {
	[Types.READ_ALBUMS]: getAlbums,
})
