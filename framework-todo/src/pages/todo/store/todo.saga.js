import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import todosService from '../../../services/todoService'
import {Types} from "./todo.ducks";

function* getTodos(action){
		const { data } = yield call( async () => await todosService.getAll());
        
        yield put({
			type: Types.READ_TODOS,
			data: data
		});
}

function* takeReadTodos() {
	yield takeLatest(Types.GET_TODOS, getTodos);
}

export default function* root() {
	yield all([fork(takeReadTodos)])
}
