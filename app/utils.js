import update from 'immutability-helper';
import URLSearchParams from 'url-search-params';

export function loadGoogleFont(optionName, fontName) {
	var link = document.getElementById(optionName) || document.createElement('link');
	var head = document.getElementsByTagName('head')[0];
	// Reset link if it exists
	if (head.contains(link)) {
		head.removeChild(link);
	}

	link.id = optionName;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://fonts.googleapis.com/css?family=' + fontName.replace(/ /g, '+');
	link.media = 'all';
	head.appendChild(link);
}

export function getParam(paramName) {
	const queryString = new URLSearchParams(document.location.search);
	return queryString.get(paramName) || null;
}

export function setParam(paramName, paramValue) {
	var queryString = new URLSearchParams(document.location.search);
	queryString.set(paramName, paramValue);
	return queryString;
}