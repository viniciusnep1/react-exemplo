import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import AlbumsService from '../../../services/albumsService'
import UserService from '../../../services/userService'
import {Types} from "./albums.ducks";

function* getAlbums(action){
		const { data } = yield call( async () => await AlbumsService.getAll());
		
        yield put({
			type: Types.READ_ALBUMS,
			data: data
		});
}

function* takeReadAlbums() {
	yield takeLatest(Types.GET_ALBUMS, getAlbums);
}

export default function* root() {
	yield all([fork(takeReadAlbums)])
}
