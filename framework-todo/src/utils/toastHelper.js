import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ToastHelper {
	static create() {
		toast.configure({ position: toast.POSITION.TOP_RIGHT, autoClose: 10000, newestOnTop: true });
	}

	static success(mensagem, configuracao) {
		toast.success('✔ ' + mensagem, configuracao || {});
	}

	static error(mensagem, configuracao) {
		toast.error('❌ ' + mensagem, configuracao || {});
	}

	static warn(mensagem, configuracao) {
		toast.warn('⚠ ' + mensagem, configuracao || {});
	}

	static info(mensagem, configuracao) {
		toast.info('❗ ' + mensagem, configuracao || {});
	}

	static default(mensagem, configuracao) {
		toast(mensagem, configuracao || {});
	}
}
