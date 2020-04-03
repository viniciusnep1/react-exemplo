import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import PostsService from '../../../services/postsService'
import UserService from '../../../services/userService'
import {Types} from "./posts.ducks";

function* getListPosts(action){
        const { data } = yield call( async () => await PostsService.getAll());
        yield put({
			type: Types.READ_POSTS,
			data: data
		});
}

function* getPostsDetails(action){
	const { params } = action
	const { data } = yield call( async () => await PostsService.getById(params));
	let user = 	yield call( async () => await UserService.getById(data.userId));
	data.user = user.data
	
	yield put({
		type: Types.READ_POSTS_DETAILS,
		data: data
	});
}


function* takeReadPosts() {
	yield takeLatest(Types.GET_POSTS, getListPosts);
}

function* takeReadPostsDetails() {
	yield takeLatest(Types.GET_POSTS_DETAILS, getPostsDetails);
}

export default function* root() {
	yield all([fork(takeReadPosts)])
	yield all([fork(takeReadPostsDetails)])
}
