import TOKENS_GROUPS from '../data/tokensGroups';
import TOKENS from '../data/tokens';
import FONTS_RECIPES from '../data/fontsRecipes';
import MODULES_SCHEMA from '../data/modulesSchema';
import MODULES from '../data/modules';
import ITEMS_SCHEMA from '../data/itemsSchema';
import ITEMS from '../data/items';
import CONTENTS from '../data/contents';
import OPTIONS from '../data/options';
import * as type from '../constants';
import update from 'immutability-helper';

const initialState = {
	activeTab: 'modules',
	activeTabItem: 'ModuleImage-1',
	tokensGroups: TOKENS_GROUPS,
	tokens: TOKENS,
	fontsRecipes: FONTS_RECIPES,
	fonts: [],
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
		showGuides: true,
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
			var newState = '';
			if (action.data) {
				newState = update(state, {contents:
					{[action.id]:
						{$merge: action.data}
					}
				});
			}
			else {
				newState = update(state, {contents: 
					{[action.id]:
						{value: 
							{$set: action.value}
						}
					}
				});
			}
			return newState;
			break;
		case type.UPDATE_TOKEN:
			var newState = '';
			if (action.data) {
				newState = update(state, {tokens:
					{[action.name]:
						{$merge: action.data}
					}
				});
			}
			else {
				newState = update(state, {tokens: 
					{[action.name]:
						{value: 
							{$set: action.value}
						}
					}
				});
			}
			return newState;
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
		case type.SET_HOTKEY:
			return update(state, {shortcuts: {[action.shortcutName]: {hot: {$set: action.hot}}}});
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
