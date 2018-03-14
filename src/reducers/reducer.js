import TOKENS_GROUPS from '../data/tokensGroups';
import TOKENS from '../data/tokens';
import FONTS_RECIPES from '../data/fontsRecipes';
import LAYOUTS from '../data/layouts';
import MODULES_SCHEMA from '../data/modulesSchema';
import MODULES from '../data/modules';
import ITEMS_SCHEMA from '../data/itemsSchema';
import ITEMS from '../data/items';
import CONTENTS from '../data/contents';
import OPTIONS from '../data/options';
import * as type from '../constants';
import update from 'immutability-helper';

const initialState = {
	activeLayout: 0,
	activeTab: 'modules',
	activeTabItem: '',
	tokensGroups: TOKENS_GROUPS,
	tokens: TOKENS,
	fontsRecipes: FONTS_RECIPES,
	fonts: [],
	layouts: LAYOUTS,
	modulesSchema: MODULES_SCHEMA,
	modules: MODULES,
	itemsSchema: ITEMS_SCHEMA,
	items: ITEMS,
	contents: CONTENTS,
	options: OPTIONS,
	project: {
		id: '',
		name: '',
		status: "new",
	},
	ui: {
		buttonSaveState: '',
		showGuides: false,
		guidesSetByUser: false
	},
	shortcuts: {
		toggleGuides: {
			name: "toggleGuides",
			label: "Toggle Guides",
			keyValue: 'h',
			hot: false
		}
	}
};

const reducer = (state=initialState, action) => {
	let index;
	switch (action.type) {
		case type.UPDATE_OPTION:
			return update(state, {
				[action.data.type]: {
					[action.data.id]: {
						options: {
							[action.name]: {
								$set: action.value
							}
						}
					}
				}
			});
			break;
		case type.UPDATE_CONTENT:
			if (action.data) {
				return update(state, {contents:
					{[action.id]:
						{$merge: action.data}
					}
				});
			}
			else {
				return update(state, {contents: 
					{[action.id]:
						{value: 
							{$set: action.value}
						}
					}
				});
			}
			break;
		case type.UPDATE_TOKEN:
			if (action.data) {
				return update(state, {tokens:
					{[action.name]:
						{$merge: action.data}
					}
				});
			}
			else {
				return update(state, {tokens: 
					{[action.name]:
						{value: 
							{$set: action.value}
						}
					}
				});
			}
			return newState;
			break;
		case type.UPDATE_MODULE_TITLE:
			return update(state, {modules: {[action.id]: 
				{title: {$set: action.title}}
			}});
			break;
		case type.SET_TOKENS:
			return update(state, {tokens: {$set: action.tokens}});
			break;
		case type.SET_MODULES:
			return update(state, {modules: {$set: action.modules}});
			break;
		case type.SET_ITEMS:
			return update(state, {items: {$set: action.items}});
			break;
		case type.SET_CONTENTS:
			return update(state, {contents: {$set: action.contents}});
			break;
		case type.SET_MODULES_ORDER:
			return update(state, {layouts: {[state.activeLayout]: 
				{modules: {$set: action.modulesOrder}}
			}});
			break;
		case type.SET_ITEMS_ORDER:
			return update(state, {modules: {[action.moduleId]: {items: 
				{$set: action.itemsOrder}
			}}});
			break;
		case type.SET_PROJECT:
			return update(state, {
				tokens: {$set: action.tokens},
				layouts: {$set: action.layouts},
				modules: {$set: action.modules},
				items: {$set: action.items},
				contents: {$set: action.contents}
			});
			break;
		case type.ADD_MODULE:
			return update(state, {
				modules: {$merge: {[action.id]: action.object}},
				layouts: {[state.activeLayout]: {modules: 
					{$push: [action.id]}
				}}
			});
			break;
		case type.DELETE_MODULE: {
			const activeLayout = state.activeLayout;
			const index = state.layouts[activeLayout].indexOf(action.id);
			return update(state, {layouts: {[activeLayout]: {modules:
				{$splice: [[index, 1]]}
			}}});
			break;
		}
		case type.ADD_ITEM:
			return update(state, {items: {$merge: {[action.id]: action.object}}});
			break;
		case type.DELETE_ITEM: {
			const index = state.modules[action.moduleId].items.indexOf(action.id);
			return update(state, {modules: {[action.moduleId]:
				{items:
					{$splice: [[index, 1]]}
				}
			}});
			break;
		}
		case type.ADD_ITEM_TO_MODULE:
			return update(state, {modules: {[action.moduleId]: 
				{items: 
					{$push: [action.itemId]}
				}
			}});
			break;
		case type.ADD_CONTENT:
			return update(state, {contents: {$merge: {[action.id]: action.object}}});
			break;
		case type.UPDATE_FONT_LIST:
			return update(state, {fonts: {$set: action.fonts}});
			break;
		case type.SET_ACTIVE_TAB:
			return update(state, {activeTab: {$set:action.tabName}});
			break;
		case type.SET_ACTIVE_TAB_ITEM:
			return update(state, {activeTabItem: {$set:action.itemName}});
			break;
		case type.SAVE_PROJECT:
			return state;
			break;
		case type.SAVE_PROJECT_START:
			return update(state, {ui: {buttonSaveState: {$set:action.buttonSaveState}}});
			break;
		case type.SAVE_PROJECT_SUCCESS:
			return update(state, {
				project: { $merge:action.project },
				ui: {
					buttonSaveState: { $set:action.buttonSaveState }
				}
			});
			break;
		case type.SAVE_PROJECT_ERROR:
			return update(state, {ui: {buttonSaveState: {$set:action.buttonSaveState}}});
			break;
		case type.TOGGLE_GUIDES:
			return update(state, {
				ui: {
					showGuides: {$apply: x => {return !x;} },
					guidesSetByUser: {$set: action.userAction}
				}
			});
			break;
		case type.SWITCH_LAYOUT:
			return update(state, {activeLayout:
				{$set: action.index}
			});
			break;
		case type.SET_HOTKEY:
			return update(state, {shortcuts: {[action.shortcutName]: {hot: {$set: action.hot}}}});
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
