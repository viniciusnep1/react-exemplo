import api from './api';

export default {
	getById(id){
		return api.get(`/users/${id}`);
	}
};
