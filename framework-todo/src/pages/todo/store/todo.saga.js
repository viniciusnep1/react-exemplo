import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import todosService from '../../../services/todoService'
import {Types} from "./todo.ducks";
import executeAction from "../../../store/sagas/executeAction";
import ToastHelper from '../../../utils/toastHelper'

function* getTodos(action){
		const { data } = yield call( async () => await todosService.getAll());
        
        yield put({
			type: Types.READ_TODOS,
			data: data
		});
}

function* createTodos(action){
	yield executeAction(function* () {
		const { params, callback } = action
		let result = yield call( async () => await todosService.create(params));
		
		if(result.data) ToastHelper.success("Tarefa criada com sucesso!");
		
		const { data } = yield call( async () => await todosService.getAll());
		
		yield put({
			type: Types.POST_TODOS,
			data: data
		});
		callback()
	}, Types.CREATE_TODOS);
}

function* takeReadTodos() {
	yield takeLatest(Types.GET_TODOS, getTodos);
}

function* takeCreateTodos() {
	yield takeLatest(Types.CREATE_TODOS, createTodos);
}

export default function* root() {
	yield all([fork(takeReadTodos)])
	yield all([fork(takeCreateTodos)])
}
