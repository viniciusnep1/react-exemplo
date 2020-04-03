import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
	showLoading: [],
	hideLoading: [],
});

const INITIAL_STATE_VALUES = {
	loading: false,
};

const INITIAL_STATE = Immutable(Object.assign({}, INITIAL_STATE_VALUES));

const showLoading = (state = INITIAL_STATE) => state.merge({ loading: true });
const hideLoading = (state = INITIAL_STATE) => state.merge({ loading: false });


export default createReducer(INITIAL_STATE, {
	[Types.SHOW_LOADING]: showLoading,
	[Types.HIDE_LOADING]: hideLoading,
});
