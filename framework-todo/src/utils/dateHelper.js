import moment from 'moment';

export default class DateHelper {
	static convertStringDate(dataString, formatInput, formateOutput) {
		return moment(dataString, formatInput).format(formateOutput);
	}

	static convertStringToDate(dataString, formateOutput) {
		return typeof dataString === 'string'
			? moment(dataString, formateOutput).toDate()
			: null;
	}

	static isDataValida(data) {
		if(typeof data !== "string" ) return true
		var dia  = data.split("/")[0];
		var mes  = data.split("/")[1];
		var ano  = data.split("/")[2];
		if(parseInt(dia) > 31 || parseInt(mes) > 12 || ano.length < 4)
			return false
		else
			return true
	}

	static setTimeZone(data) {
		return this.isDataValida(data)
			? moment(data)
				.tz('America/Sao_Paulo')
				.format()
			: null;
	}

	static formatStringDate(date) {
		var formatDateTime = this.convertStringToDate(date, "DD/MM/YYYY");
		if (this.isDataValida(formatDateTime)) {
			return moment(formatDateTime).format('DD/MM/YYYY');
		}
		return '--/--/--';
	}

	static formatDate(date) {
		if (this.isDataValida(date)) {
			return moment(date).format('DD/MM/YYYY');
		}
		return '--/--/--';
	}

	static formatDate3(date) {
		if (this.isDataValida(date)) {
			return moment(date).format('YYYY-MM-DD');
		}
		return '--/--/--';
	}

	static formatDate2(data) {
		var dia  = data.split("/")[0];
		var mes  = data.split("/")[1];
		var ano  = data.split("/")[2];

		return ("0"+mes).slice(-2) + '/' + ("0"+dia).slice(-2) + '/' + ano;
	}

	static convertDate(str) {
		var date = new Date(str),
		  month = ("0" + (date.getMonth() + 1)).slice(-2),
		  day = ("0" + date.getDate()).slice(-2);
		return [date.getFullYear(), month, day].join("-");
	}

	static createNewDate(string){
		var dia  = string.split("/")[0];
		var mes  = string.split("/")[1];
		var ano  = string.split("/")[2];
		var date = Date.parse(`${ano}-${mes}-${dia}T00:00:00-03:00`)
		if(this.isDataValida(date) !== 'Invalid date')
			return date

	}


}
