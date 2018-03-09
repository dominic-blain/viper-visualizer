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
	setTokens(value) {
		return {
			type: type.SET_TOKENS,
			tokens: value
		}
	},
	setItems(value) {
		return {
			type: type.SET_ITEMS,
			items: value
		}
	},
	setContents(value) {
		return {
			type: type.SET_CONTENTS,
			contents: value
		}
	},
	setHotkey(shortcutName, hot) {
		return {
			type: type.SET_HOTKEY,
			shortcutName: shortcutName,
			hot: hot,
		}
	},
	setModules(value) {
		return {
			type: type.SET_MODULES,
			modules: value
		}
	},
	addItemToModule(itemId, moduleId) {
		return {
			type: type.ADD_ITEM_TO_MODULE,
			itemId: itemId,
			moduleId: moduleId
		}
	},
	createModule(type) {
		return (dispatch, getState) => {
			const currentState = getState();
			const modules = currentState.modules;
			const modulesSchema = currentState.modulesSchema;
			const schema = modulesSchema[type];
			// Generate ID
			const typeCounter = util.countItemsBy(type, modules) + 1;
			const id = type + '-' + typeCounter;
			// Generate Item only if NOT repeatable
			var itemsId = [];
			if (schema.items.repeatable === false) {
				// const itemsOptions = {
				// 	options: schema.items.options,
				// 	defaults: schema.items.optionsDefaults
				// };
				schema.items.acceptedTypes.map(itemType => {
					// TODO: return item id or compute it here also
					itemsId.push(
						dispatch(ActionCreators.createItem(itemType, null, null))
					);
				});
			}
			// Generate options
			var optionsObject = {};
			schema.options.map((optionName, index) => {
				optionsObject[optionName] = schema.optionsDefaults[index];
			});
			const newModule = {
				id: id,
				type: type,
				title: id,
				items: itemsId,
				options: optionsObject
			}
			dispatch(ActionCreators.addModule(id, newModule));
		}
	},
	createItem(type, moduleId = null, extraOptions = null) {
		return (dispatch, getState) => {
			const currentState = getState();
			const contents = currentState.contents;
			const items = currentState.items;
			const itemsSchema = currentState.itemsSchema;
			const schema = itemsSchema[type];
			// Generate ID
			const typeCounter = util.countItemsBy(type, items) + 1;
			const id = type + '-' + typeCounter;
			// Generate Options
			var optionsObject = {};
			if (schema.options) {
				schema.options.map((optionName, index) => {
					// TODO: support defaults
					optionsObject[optionName] = schema.optionsDefaults[index];
				});
			}
			// Extra options
			if (extraOptions) {
				extraOptions.options.map((optionName, index) => {
					// TODO: support defaults
					optionsObject[optionName] = extraOptions.defaults[index];
				});
			}
			// Generate content...
			var contentsId = [];
			for (var contentType in schema.content) {

				const contentSchema = schema.content[contentType];
				// ID
				const contentTypeCounter = util.countItemsBy(contentType, contents) + 1;
				const contentId = contentType + '-' + contentTypeCounter;
				contentsId.push(contentId);
				// Input
				const contentInput = contentSchema.input;
				// Options
				var contentOptionsObject = {};
				if (contentSchema.options) {
					contentSchema.options.map((optionName, index) => {
						// TODO: support defaults
						contentOptionsObject[optionName] = contentSchema.optionsDefaults[index];
					});
				}

				const newContent = {
					id: contentId,
					type: contentType,
					input: contentInput,
					value: "",
					options: contentOptionsObject
				}
				dispatch(ActionCreators.addContent(contentId, newContent));
			}
			const newItem = {
				id: id,
				type: type,
				title: id,
				content: contentsId,
				options: optionsObject
			}
			if (moduleId) {
				dispatch(ActionCreators.addItemToModule(id, moduleId));
			}
			dispatch(ActionCreators.addItem(id, newItem));
			return id;
		}
	},
	addModule(id, object) {
		return {
			type: type.ADD_MODULE,
			id: id,
			object: object
		}
	},
	addItem(id, object) {
		return {
			type: type.ADD_ITEM,
			id: id,
			object: object
		}
	},
	addContent(id, object) {
		return {
			type: type.ADD_CONTENT,
			id: id,
			object: object
		}
	},
	setModulesOrder(newOrder) {
		return {
			type: type.SET_MODULES_ORDER,
			modulesOrder: newOrder
		}
	},
	setItemsOrder(moduleId, newOrder) {
		return {
			type: type.SET_ITEMS_ORDER,
			moduleId: moduleId,
			itemsOrder: newOrder
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
			const projectRef = database.ref('/projects/' + projectID);
			const projectTokensRef = database.ref('/projects/' + projectID + '/tokens/');
			const projectModulesRef = database.ref('/projects/' + projectID + '/modules/');
			const projectModulesOrderRef = database.ref('/projects/' + projectID + '/modulesOrder/');
			const projectItemsRef = database.ref('/projects/' + projectID + '/items/');
			const projectContentsRef = database.ref('/projects/' + projectID + '/contents/');
			var tokens = {};
			var modulesOrder = [];
			var modules = {};
			var items = {};
			var contents = {};
			var responseCounter = 0;

			projectRef.once('value', snapshot => {
				if (snapshot.val()) {
					dispatch(ActionCreators.setProject(snapshot.val()));
				}
			});
		}
	},
	setProject({tokens, modulesOrder, modules, items, contents}) {
		return dispatch => {
			for (var tokenKey in tokens) {
				const token = tokens[tokenKey];
				if (token.type == 'font') {
					dispatch(ActionCreators.loadFont(tokens[tokenKey], tokenKey, null));
				}
			}
			dispatch(ActionCreators.setTokens(tokens));
			dispatch(ActionCreators.setModulesOrder(modulesOrder));
			dispatch(ActionCreators.setModules(modules));
			dispatch(ActionCreators.setItems(items));
			dispatch(ActionCreators.setContents(contents));
		}
	},
	saveProject() {
		return (dispatch, getState) => {
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const projectID = util.getParam('project');
			const projectState = {
				tokens: currentState.tokens,
				modulesOrder: currentState.modulesOrder,
				modules: currentState.modules,
				items: currentState.items,
				contents: currentState.contents
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
			type: type.SAVE_PROJECT_START,
			buttonSaveState: 'start'
		}
	},
	saveProjectError() {
		return {
			type: type.SAVE_PROJECT_ERROR,
			buttonSaveState: 'error'
		}
	},
	saveProjectSuccess(id) {
		return {
			type: type.SAVE_PROJECT_SUCCESS,
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