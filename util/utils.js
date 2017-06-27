function getValueFrom(optionName, optionList) {
	var value;

	optionList.forEach(function(option) {
		if (option.name == optionName) {
			value = option.value;
		}
	});
	return value;
}

function setValueFrom(optionName, newValue, optionList) {
	optionList.forEach(function(option) {
		if (option.name == optionName) {
			option.value = newValue;
		}
	});
	return optionList;
}

function getOptionsBy(groupName, optionList) {
	var options = [];

	optionList.forEach(function(option) {
		if (option.group == groupName) {
			options.push(option);
		}
	});
	return options;
}
