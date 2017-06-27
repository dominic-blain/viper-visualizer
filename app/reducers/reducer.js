import { UPDATE_OPTION } from '../constants';
import OPTIONS_GROUPS from '../data/optionsGroups';
import OPTIONS from '../data/options';
import MODULES from '../data/modules';

const initialState = {
	options: OPTIONS,
	optionsGroups: OPTIONS_GROUPS,
	modules: MODULES
};

const reducer = (state=initialState, action) => {
	console.log(state, action);

	switch (action.type) {
		case UPDATE_OPTION:
			return null;
		default:
			return state;
	}
};

export default reducer;