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
			fonts: fonts
		}
	},
	getFontList() {
		return {
			type: type.GET_FONT_LIST
		}
	},
	updateTabs(tabName) {
		return {
			type: type.UPDATE_TABS,
			tabName: tabName
		}
	}
};

export default ActionCreators;