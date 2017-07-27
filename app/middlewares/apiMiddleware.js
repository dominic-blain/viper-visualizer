import ActionCreators from '../actions/ActionCreators';
import store from '../store/store.js';
import * as type from '../constants';
import { GOOGLEFONTS_API_KEY } from '../config';
import Axios from 'axios';

const apiMiddleware = store => next => action => {
	next(action);
	switch(action.type) {
		case type.GET_FONT_LIST:
			var fonts = [];
			var endpoint = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';
			var url = endpoint + GOOGLEFONTS_API_KEY;

			// Get googlefonts json
			var apiRequest = Axios.get(url)
			.then(response => {
				// for each fonts, add them to font list
				response.data.items.map(item => {
					fonts.push({
						"name": item.family,
						"value": item.family
					});
				});

				next(ActionCreators.updateFontList(fonts));
			});
			break;
		default:
			break;
	}
}

export default apiMiddleware;