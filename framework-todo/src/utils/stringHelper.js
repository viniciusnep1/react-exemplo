export default class StringHelper {
	static truncate(texto, value) {
		if (!texto) {
			return texto;
		}
		return texto.length > value ? `${texto.substr(0, value)}...` : texto;
	}
}
