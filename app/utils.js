export function getValueFrom(optionName, optionList) {
	var value;

	optionList.forEach(function(option) {
		if (option.name == optionName) {
			value = option.value;
		}
	});
	return value;
}

export function setValueFrom(optionName, newValue, optionList) {
	optionList.forEach(function(option) {
		if (option.name == optionName) {
			option.value = newValue;
		}
	});
	return optionList;
}

export function getOptionsBy(groupName, optionList) {
	var options = [];

	optionList.forEach(function(option) {
		if (option.group == groupName) {
			options.push(option);
		}
	});
	return options;
}
