
import axios from 'axios';
import store from '../store';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

api.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

api.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if(error.response) {
			if (error.response.data.status === 500) {
                console.log('Ocorreu um erro no sistema, contate o administrador do sistema.');
			}
		}

		return Promise.reject(error);
	},
);

export default api;
