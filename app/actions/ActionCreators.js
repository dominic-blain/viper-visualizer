import * as type from '../constants';
import database from '../database';
import { getParam, setParam } from '../utils';

const ActionCreators = {
	updateOption(value, optionName) {
		return {
			type: type.UPDATE_OPTION,
			value: value,
			optionName: optionName
		}
	},
	setOptions(value) {
		return {
			type: type.SET_OPTIONS,
			options: value,
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
	loadProject() {
		return dispatch => {
			const projectID = getParam('project');
			database.ref('/projects/' + projectID).once('value', data => {
				const value = data.val();
				if (value) {
					console.log(value);
					dispatch(ActionCreators.setOptions(value));
				}
			});
		}
	},
	saveOptions() {
		return (dispatch, getState) => {
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const projectID = getParam('project');

			dispatch(ActionCreators.saveOptionsStart());

			database.ref('/projects/' + projectID).once('value', data => {
				const value = data.val();

				if (value) {
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
							// queryString.set('project', newProjectRef.key);
							const queryString = setParam('project', newProjectRef.key);
							console.log(queryString);
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