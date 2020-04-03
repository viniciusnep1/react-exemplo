import { all, fork } from "redux-saga/effects";
import todos from '../../pages/todo/store/todo.saga'

export default function* rootSaga() {
	yield all([
		fork(todos)
	]);

}
