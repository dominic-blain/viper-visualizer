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
	updateFontToken(name, token) {
		return dispatch => {
			dispatch(ActionCreators.loadFont(name, token));
			dispatch(ActionCreators.updateToken(name, token.value, token));
		}
	},
	updateModuleTitle(id, title) {
		return {
			type: type.UPDATE_MODULE_TITLE,
			id: id,
			title: title
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
	deleteModule(id) {
		return {
			type: type.DELETE_MODULE,
			id: id
		}
	},
	deleteItem(id, moduleId) {
		return {
			type: type.DELETE_ITEM,
			id: id,
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
			const typeCounter = dispatch(ActionCreators.useIdCount());

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
			const typeCounter = dispatch(ActionCreators.useIdCount());
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
				const contentTypeCounter = dispatch(ActionCreators.useIdCount());
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
	setProject({tokens, layouts, modules, items, contents}) {
		return {
			type: type.SET_PROJECT,
			tokens: tokens,
			layouts: layouts,
			modules: modules,
			items: items,
			contents: contents
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
	loadFont(token) {
		return () => {
			switch(token.source) {
				case 'google-font':
					util.loadGoogleFont(token);
					break;
				case 'upload':
					util.loadFileFont(token);
					break;
			}
		}
	},
	loadProject() {
		return dispatch => {
			const projectID = util.getParam('project');
			if (projectID) {
				const projectRef = database.ref('/projects/' + projectID);

				projectRef.once('value', snapshot => {
					const value = snapshot.val();
					if (value) {
						const tokens = value.tokens;
						for (var tokenKey in tokens) {
							const token = tokens[tokenKey];
							if (token.type == 'font') {
								dispatch(ActionCreators.loadFont(tokens[tokenKey], tokenKey));
							}
						}
						dispatch(ActionCreators.setProject(value));
					}
				});
			}
			else {
				return null;
			}

		}
	},
	saveProject() {
		return (dispatch, getState) => {
			const currentState = getState();
			const projectsRef = database.ref('/projects');
			const projectID = util.getParam('project');
			const projectState = {
				tokens: currentState.tokens,
				layouts: currentState.layouts,
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
	},
	switchLayout(index) {
		return {
			type: type.SWITCH_LAYOUT,
			index: index
		}
	},
	useIdCount() {
		return (dispatch, getState) => {
			const currentState = getState();
			dispatch(ActionCreators.incrementIdCount());
			return currentState.idCount;
		}
	},
	incrementIdCount() {
		return {
			type: type.INCREMENT_ID_COUNT
		}
	}
};

export default ActionCreators;