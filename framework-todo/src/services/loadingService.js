import { Types } from '../store/ducks/loading';

export default class LoaderHelper {
	static showLoading() {
		return {
			type: Types.SHOW_LOADING,
		};
	}

	static hideLoading() {
		return {
			type: Types.HIDE_LOADING,
		};
	}
}
