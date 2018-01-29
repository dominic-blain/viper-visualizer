import * as type from '../constants';
import database from '../database';

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
	},
	saveOptions(options) {
		return dispatch => {
			const projectsRef = database.ref('/projects');
			projectsRef.push({options})
			.then(() => {
				// handle success
				return {
					type: type.SAVE_OPTIONS
				};
			})
			.catch(() => {
				// handle error
			});
		}
	}
};

export default ActionCreators;