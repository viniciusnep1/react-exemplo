import api from './api';

export default {
	getAll(){
		return api.get(`/posts`);
	},
	getById(id){
		return api.get(`/posts/${id}`);
	}
};
