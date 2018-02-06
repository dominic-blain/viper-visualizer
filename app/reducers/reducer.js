import OPTION_TABS from '../data/optionTabs';
import OPTION_GROUPS from '../data/optionGroups';
import OPTIONS from '../data/options';
import MODULES from '../data/modules';
import MODULE_LIST from '../data/moduleList';
import MODULE_OPTIONS from '../data/moduleOptions';
import * as type from '../constants';
import update from 'immutability-helper';

const initialState = {
	activeTab: OPTION_TABS[0].name,
	optionTabs: OPTION_TABS,
	optionGroups: OPTION_GROUPS,
	options: OPTIONS,
	modules: MODULES,
	moduleList: MODULE_LIST,
	moduleOptions: MODULE_OPTIONS,
	fonts: [],
	project: {
		id: '',
		name: '',
		status: "new",
	},
	ui: {
		buttonSaveState: ''
	}
};

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case type.UPDATE_OPTION:
			return update(state, {options: {[action.optionName]: {$merge: action.option}}});
			break;
		case type.UPDATE_MODULE_OPTION:
			return update(state, {moduleList: 
				{[action.moduleId]:
					{options: 
						{[action.optionName]:
							{$set: action.optionValue}
						}
					}
				}
			});
			break;
		case type.SET_OPTIONS:
			return update(state, {options: {$set: action.options}});
			break;
		case type.UPDATE_FONT_LIST:
			return update(state, {fonts: {$set: action.fonts}});
			break;
		case type.UPDATE_TABS:
			return update(state, {activeTab: {$set:action.tabName}});
			break;
		case type.SAVE_OPTIONS:
			return state;
			break;
		case type.SAVE_OPTIONS_START:
			return update(state, {ui: {buttonSaveState: {$set:action.buttonSaveState}}});
			break;
		case type.SAVE_OPTIONS_SUCCESS:
			return update(state, {
				project: { $merge:action.project },
				ui: {
					buttonSaveState: { $set:action.buttonSaveState }
				}
			});
			break;
		case type.SAVE_OPTIONS_ERROR:
			return update(state, {ui: {buttonSaveState: {$set:action.buttonSaveState}}});
			break;
		default:
			return state;
			break;
	}
};

export default reducer;
