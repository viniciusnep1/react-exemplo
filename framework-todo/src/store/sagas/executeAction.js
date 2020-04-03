import { put } from 'redux-saga/effects';
import { Types as TypeLoding } from '../ducks/loading';

/** UTILS */
export function* setLoading() {
	yield put({
		type: TypeLoding.SET_LOADING,
	});
}




export default function* executeAction(execAction, types, callbackError) {
	try {
		yield execAction();
	} catch (error) {
		if (callbackError) callbackError();
	}
}
