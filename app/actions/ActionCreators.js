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
	saveOptions() {
		return (dispatch, getState) => {
			var currentState = getState();
			const projectsRef = database.ref('/projects');

			projectsRef.push(currentState.options)
			.then(() => {
				// handle success
			})
			.catch(() => {
				// handle error
			});
		}
	}
};

export default ActionCreators;