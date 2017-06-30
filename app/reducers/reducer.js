import OPTION_TABS from '../data/optionTabs';
import OPTION_GROUPS from '../data/optionGroups';
import OPTIONS from '../data/options';
import MODULES from '../data/modules';
import { UPDATE_OPTION } from '../constants';
import update from 'immutability-helper';

const initialState = {
	optionTabs: OPTION_TABS,
	optionGroups: OPTION_GROUPS,
	options: OPTIONS,
	modules: MODULES
};

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case UPDATE_OPTION:
			return update(state, {options: {[action.optionName]: {value: {$set: action.value}}}});;
		default:
			return state;
	}
};

export default reducer;
