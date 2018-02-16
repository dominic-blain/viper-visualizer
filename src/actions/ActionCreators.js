import * as type from '../constants';
import database from '../database';
import * as util from '../utils';
import { GOOGLEFONTS_API_KEY } from '../config';
import Axios from 'axios';


const ActionCreators = {
	updateOption(name, value, data) {
		return {
			type: type.UPDATE_OPTION,
			name: name,
			value: value,
			data: data
		}
	},
	updateContent(id, value, data) {
		return {
			type: type.UPDATE_CONTENT,
			id: id,
			value: value,
			data: data
		}
	},
	updateToken(name, value, data) {
		return {
			type: type.UPDATE_TOKEN,
			name: name,
			value: value,
			data: data
		}
	},
	updateFontToken(name, token, file) {
		return dispatch => {
			dispatch(ActionCreators.loadFont(name, token, file));
			dispatch(ActionCreators.updateToken(name, token.value, token));
		}
	},
	setOptions(value) {
		return {
			type: type.SET_OPTIONS,
			options: value
		}
	},
	setHotkey(shortcutName, hot) {
		return {
			type: type.SET_HOTKEY,
			shortcutName: shortcutName,
			hot: hot,
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
	changeTab(tabName) {
		return (dispatch, getState) => {
			const currentState = getState();
			const guidesSetByUser = currentState.ui.guidesSetByUser;
			const currentTab = currentState.activeTab;
			if (currentTab != tabName) {
				if (!guidesSetByUser) {
					if (tabName == 'variables' || tabName == 'modules') {
						dispatch(ActionCreators.toggleGuides(false));
					}
				}
				dispatch(ActionCreators.setActiveTab(tabName));
			}
			dispatch(ActionCreators.setActiveTabItem(''));
		}
	},
	setActiveTab(tabName) {
		return {
			type: type.SET_ACTIVE_TAB,
			tabName: tabName
		}
	},
	changeTabItem(itemName) {
		return (dispatch, getState) => {
			// Scroll to anchor?
			dispatch(ActionCreators.setActiveTabItem(itemName));
		}
	},
	setActiveTabItem(itemName) {
		return {
			type: type.SET_ACTIVE_TAB_ITEM,
			itemName: itemName
		}
	},
	loadFont(name, token, file) {
		return () => {
			switch(token.source) {
				case 'google-font':
					util.loadGoogleFont(name, token);
					break;
				case 'upload':
					util.loadFileFont(file, token);
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
			type: type.TOGGLE_GUIDES,
			userAction: userAction
		}
	}
};

export default ActionCreators;