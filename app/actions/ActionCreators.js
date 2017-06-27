import { UPDATE_OPTION } from '../constants';

const ActionCreators = {
	updateOption(value) {
		return {
			type: UPDATE_OPTION,
			value: value
		}
	}
};

export default ActionCreators;