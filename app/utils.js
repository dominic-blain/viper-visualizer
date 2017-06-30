import update from 'immutability-helper';

export function getValueFrom(optionName, optionList) {
	var value;

	optionList.forEach(function(option) {
		if (option.name == optionName) {
			value = option.value;
		}
	});
	return value;
}

export function setValueFrom(optionName, newValue, optionList, state) {
	var changedIndex;
	optionList.forEach(function(option, index) {
		if (option.name == optionName) {
			changedIndex = index;
		}
	});
	return update(state, {options: {[changedIndex]: {value: {$set: newValue}}}});
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
