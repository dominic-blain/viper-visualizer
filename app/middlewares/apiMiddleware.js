import ActionCreators from '../actions/ActionCreators';
import store from '../store/store.js';
import { GOOGLEFONTS_API_KEY } from '../config';

const apiMiddleware = store => next => action => {
	next(action);
	switch(action.type) {
		case 'GET_FONT_LIST':
			var fonts = [];
			var endpoint = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';
			var url = endpoint + GOOGLEFONTS_API_KEY;

			// Get googlefonts json
			this.apiRequest = Axios.get(url)
			.then(data => {
				// for each fonts, add them to font list
				data.items.map(item => {
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