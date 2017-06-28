import { UPDATE_OPTION } from '../constants';
import OPTIONS_GROUPS from '../data/optionsGroups';
import OPTIONS from '../data/options';
import MODULES from '../data/modules';
import {setValueFrom} from '../utils';
import { OPTIONS_TEST } from '../data/options';

const initialState = {
	options: OPTIONS,
	optionsGroups: OPTIONS_GROUPS,
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