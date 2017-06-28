import OPTION_TABS from '../data/optionTabs';
import OPTION_GROUPS from '../data/optionGroups';
import OPTIONS from '../data/options';
import MODULES from '../data/modules';
import { UPDATE_OPTION } from '../constants';
import {setValueFrom} from '../utils';

const initialState = {
	optionTabs: OPTION_TABS,
	optionGroups: OPTION_GROUPS,
	options: OPTIONS,
	modules: MODULES
};

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case UPDATE_OPTION:
			return setValueFrom(action.optionName, action.value, state.options, state);
		default:
			return state;
	}
};

export default reducer;