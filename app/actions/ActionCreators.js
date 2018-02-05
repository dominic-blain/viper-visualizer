import * as type from '../constants';
import database from '../database';
import * as util from '../utils';
import { GOOGLEFONTS_API_KEY } from '../config';
import Axios from 'axios';


const ActionCreators = {
	updateOption(value, optionName) {
		return {
			type: type.UPDATE_OPTION,
			optionName: optionName,
			option: value,
		}
	},
	updateFontOption(font, optionName, file) {
		return dispatch => {
			dispatch(ActionCreators.loadFont(font, optionName, file));
			dispatch(ActionCreators.updateOption(font, optionName));
		}
	},
	setOptions(value) {
		return {
			type: type.SET_OPTIONS,
			options: value
		}
	},
	updateFontList(fonts) {
		return {
			type: type.UPDATE_FONT_LIST,
			fonts: fonts
		}
	},
	getFontList() {
		return dispatch => {
			var fonts = [];
			const endpoint = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';
			const url = endpoint + GOOGLEFONTS_API_KEY;

			var apiRequest = Axios.get(url)
			.then(response => {
				response.data.items.map(item => {
					fonts.push({
						'name': item.family,
						'value': item.family
					});
				});
				dispatch(ActionCreators.updateFontList(fonts));
			})
			.catch(error => {
				// TODO Handle error
			});
		}
	},
	updateTabs(tabName) {
		return {
			type: type.UPDATE_TABS,
			tabName: tabName
		}
	},
	loadFont(font, optionName, file) {
		return () => {
			switch(font.source) {
				case 'google-font':
					util.loadGoogleFont(optionName, font);
					break;
				case 'upload':
					util.loadFileFont(file, font);
					break;
			}
		}
	},
	loadProject() {
		return dispatch => {
			const projectID = util.getParam('project');
			database.ref('/projects/' + projectID).once('value', data => {
				const value = data.val();
				if (value) {
					dispatch(ActionCreators.setProject(value));
				}
			});
		}
	},
	setProject(value) {
		return dispatch => {
			var optionKeys = Object.keys(value);
			optionKeys.forEach(key => {
				if (value[key].type == 'font') {
					dispatch(ActionCreators.loadFont(value[key], key, null));
				}
			});
			dispatch(ActionCreators.setOptions(value));
		}
	},
	saveOptions() {
		return (dispatch, getState) => {
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const projectID = util.getParam('project');

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
							const queryString = util.setParam('project', newProjectRef.key);
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