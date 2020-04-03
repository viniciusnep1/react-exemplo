export default class ObjectHelper {
	static clone(object) {
		return JSON.parse(JSON.stringify(object));
	}


	static getValuesParseToSelect(list, valueName, labelName) {
        let options = [];

		valueName = valueName || 'id';
		labelName = labelName || 'nome';
		list = Array.isArray(list) ? list : [];
		list.forEach(item => {
			options.push({ value: item[valueName], label: item[labelName] })
        });
		return options;
	}

	static getValuesMaterialParseToSelect(list, valueName, labelName, unidade) {
		let options = [];

		valueName = valueName || 'id';
		labelName = labelName || 'nome';
		unidade = unidade || 'unidade';
		list = Array.isArray(list) ? list : [];
		list.forEach(item => {
			options.push({ value: item[valueName], label: item[labelName],unidade: item[unidade] })
				});
		return options;
	}

	static parseValuesUnitsToSelect(unity) {
		let options = [];
		options.push({ value: unity.id, label: unity.sigla })
		if(unity.unidadesConversao ? (unity.unidadesConversao.length > 0) : false) {
			unity.unidadesConversao.forEach(unidadeCOnversao => {
				options.push( {
					value: unidadeCOnversao.unidadeConvertida.id,
					label: unidadeCOnversao.unidadeConvertida.sigla
				})
			})
		}
		return options;
	}

	static getValueByPropertyName(propertyName, object) {
		const parts = propertyName.split('.');
		const length = parts.length;
		let i;
		let value = object || this;
		if (!value) return null;

		for (i = 0; i < length; i++) {
			value = value[parts[i]];
		}

		if(value === 0)
			return value

		return value || null;
	}

	static getObjectAndFieldName(string) {
		let splitName = string.split(".");
		if (splitName.length > 1) {
			return {
				object : splitName[0],
				field : splitName[1]
			};
		}

		return null;

	}
}
