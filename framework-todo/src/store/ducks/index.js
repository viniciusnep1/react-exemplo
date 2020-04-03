import { combineReducers } from 'redux';
import todos from '../../pages/todo/store/todo.ducks'
import posts from '../../pages/posts/store/posts.ducks'
import albums from '../../pages/albums/store/albums.ducks'

const reducers = combineReducers({
    todos,
    posts,
    albums
});

export default reducers;
