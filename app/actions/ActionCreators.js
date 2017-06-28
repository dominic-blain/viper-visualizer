import { UPDATE_OPTION } from '../constants';

const ActionCreators = {
	updateOption(value, optionName) {
		return {
			type: UPDATE_OPTION,
			value: value,
			optionName: optionName
		}
	}
};

export default ActionCreators;