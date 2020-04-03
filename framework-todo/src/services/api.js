
import axios from 'axios';
import store from '../store';
import loadingService from '../services/loadingService';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});


const showLoading = () => {
	store.dispatch(loadingService.showLoading());
};

const hideLoading = () => {
	store.dispatch(loadingService.hideLoading());
};


api.interceptors.request.use(
	(config) => {
		showLoading();
		return config;
	},
	(error) => {
		hideLoading();
		return Promise.reject(error);
	},
);


api.interceptors.response.use(
	(response) => {
		hideLoading();
		return response;
	},
	(error) => {
		hideLoading();
		if(error.response) {
			if (error.response.data.status === 500) {
                console.log('Ocorreu um erro no sistema, contate o administrador do sistema.');
			}
		}

		return Promise.reject(error);
	},
);

export default api;
