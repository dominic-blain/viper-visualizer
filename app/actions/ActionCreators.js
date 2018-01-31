import * as type from '../constants';
import database from '../database';
import { getParam, setParam } from '../utils';
import { GOOGLEFONTS_API_KEY } from '../config';
import Axios from 'axios';


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