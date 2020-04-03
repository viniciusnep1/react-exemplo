import { all, fork } from "redux-saga/effects";
import todos from '../../pages/todo/store/todo.saga'
import posts from '../../pages/posts/store/posts.saga'
import albums from '../../pages/albums/store/albums.saga'

export default function* rootSaga() {
	yield all([
		fork(todos)
	]);

	yield all([
		fork(posts)
	]);

	yield all([
		fork(albums)
	]);
}
