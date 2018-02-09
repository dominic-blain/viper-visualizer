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
	updateModuleOption(value, optionName, moduleId) {
		return {
			type: type.UPDATE_MODULE_OPTION,
			optionName: optionName,
			optionValue: value,
			moduleId: moduleId
		}
	},
	updateModuleContent(value, contentName, moduleId) {
		return {
			type: type.UPDATE_MODULE_CONTENT,
			contentName: contentName,
			contentValue: value,
			moduleId: moduleId
		}
	},
	setOptions(value) {
		return {
			type: type.SET_OPTIONS,
			options: value
		}
	},
	setModuleList(value) {
		return {
			type: type.SET_MODULE_LIST,
			moduleList: value
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
			const projectOptionsRef = database.ref('/projects/' + projectID + '/options/');
			const projectModuleListRef = database.ref('/projects/' + projectID + '/moduleList/');
			var options = null;
			var moduleList = null;

			projectOptionsRef.once('value', data => {
				const value = data.val();
				if (value) {
					options = value;
				}
			});
			projectModuleListRef.orderByChild('order').once('value', data => {
				const value = data.val();
				if (value) {
					moduleList = value;
				}
			});
			if (options || moduleList) {
				dispatch(ActionCreators.setProject(options, moduleList));
			}
		}
	},
	setProject(options, moduleList) {
		return dispatch => {

			for (var optionKey in options) {
				const option = options[optionKey];
				if (option.type == 'font') {
					dispatch(ActionCreators.loadFont(options[optionKey], optionKey, null));
				}
			}
			dispatch(ActionCreators.setOptions(options));
			dispatch(ActionCreators.setModuleList(moduleList));
		}
	},
	saveProject() {
		return (dispatch, getState) => {
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const projectID = util.getParam('project');
			const projectState = {
				options: currentState.options,
				moduleList: currentState.moduleList
			}

			dispatch(ActionCreators.saveProjectStart());

			database.ref('/projects/' + projectID).once('value', data => {
				const value = data.val();

				if (value) {
					projectsRef.child(projectID).set(projectState, error => {
						if (error) {
							dispatch(ActionCreators.saveProjectError());
						}
						else {
							dispatch(ActionCreators.saveProjectSuccess());
						}
					});
				}
				else {
					const newProjectRef = projectsRef.push(projectState, error => {
						if (error) {
							dispatch(ActionCreators.saveProjectError());
						}
						else {
							const newProjectID = newProjectRef.key;
							const queryString = util.setParam('project', newProjectRef.key);
							window.history.replaceState({}, '', location.pathname + '?' + queryString);
							dispatch(ActionCreators.saveProjectSuccess(newProjectID));
						}
					});
					
				}
			});
		}
	},
	saveProjectStart() {
		return {
			type: type.SAVE_OPTIONS_START,
			buttonSaveState: 'start'
		}
	},
	saveProjectError() {
		return {
			type: type.SAVE_OPTIONS_ERROR,
			buttonSaveState: 'error'
		}
	},
	saveProjectSuccess(id) {
		return {
			type: type.SAVE_OPTIONS_SUCCESS,
			buttonSaveState: 'success',
			project: {
				status: 'saved',
				id: id
			}
		}
	},
	toggleGuides(userAction) {
		return {
			type: type.TOGGLE_GUIDES
		}
	}
};

export default ActionCreators;