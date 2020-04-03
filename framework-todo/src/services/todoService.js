import api from './api';

export default {
	getAll(){
		return api.get(`/todos`);
	},
	create(todo){
		return api.post(`/todos`, todo);
	}
};
