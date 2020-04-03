import { combineReducers } from 'redux';
import todos from '../../pages/todo/store/todo.ducks'

const reducers = combineReducers({
    todos
});

export default reducers;
