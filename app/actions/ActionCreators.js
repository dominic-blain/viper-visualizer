import * as type from '../constants';

const ActionCreators = {
	updateOption(value, optionName) {
		return {
			type: type.UPDATE_OPTION,
			value: value,
			optionName: optionName
		}
	},
	updateFontList(fonts) {
		return {
			type: type.UPDATE_FONT_LIST,
			items: fonts
		}
	},
	getFontList() {
		return {
			type: type.GET_FONT_LIST
		}
	}
};

export default ActionCreators;