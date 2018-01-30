import * as type from '../constants';
import database from '../database';
import URLSearchParams from 'url-search-params';

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
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const queryString = new URLSearchParams(document.location.search);
			const projectID = queryString.get('project') || null;

			dispatch(ActionCreators.saveOptionsStart());

			database.ref('/projects/' + projectID).once('value', data => {
				const key = data.val();

				if (key) {
					projectsRef.child(projectID).set(currentState.options, error => {
						if (error) {
							dispatch(ActionCreators.saveOptionsError());
						}
						else {
							dispatch(ActionCreators.saveOptionsSuccess());
						}
					});
				}
				else {
					const newProjectRef = projectsRef.push(currentState.options, error => {
						if (error) {
							dispatch(ActionCreators.saveOptionsError());
						}
						else {
							const newProjectID = newProjectRef.key;
							queryString.set('project', newProjectRef.key);
							window.history.replaceState({}, '', location.pathname + '?' + queryString);
							dispatch(ActionCreators.saveOptionsSuccess(newProjectID));
						}
					});
					
				}
			});
		}
	},
	saveOptionsStart() {
		return {
			type: type.SAVE_OPTIONS_START,
			buttonSaveState: 'start'
		}
	},
	saveOptionsError() {
		return {
			type: type.SAVE_OPTIONS_ERROR,
			buttonSaveState: 'error'
		}
	},
	saveOptionsSuccess(id) {
		return {
			type: type.SAVE_OPTIONS_SUCCESS,
			buttonSaveState: 'success',
			project: {
				status: 'saved',
				id: id
			}
		}
	}
};

export default ActionCreators;