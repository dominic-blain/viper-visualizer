import update from 'immutability-helper';
import URLSearchParams from 'url-search-params';

export function loadGoogleFont(optionName, font) {
	var link = document.getElementById(font.value) || document.createElement('link');
	var head = document.getElementsByTagName('head')[0];
	// Reset link if it exists
	if (head.contains(link)) {
		head.removeChild(link);
	}
	link.id = font.value;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://fonts.googleapis.com/css?family=' + font.value.replace(/ /g, '+');
	link.media = 'all';
	head.appendChild(link);
}

export function loadFileFont(file, font) {
	if (file != null) {
		var reader = new FileReader();
		reader.onload = event => {
			var extension = file.name.split('.')[1];
		}
		reader.readAsDataURL(file);
	}
	var head = document.getElementsByTagName('head')[0];
	var style = document.createElement('style');
	var style = document.getElementById(font.value) || document.createElement('link')

	style.type = "text/css";
	style.id = "local-font";
	style.textContent = "@font-face { font-family: \""+ font.value +"\"; src: url('"+font.data+"'); }";
	head.appendChild(style);
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

export function computeModuleClass(moduleName, moduleOptions, options) {
	var optionClass = '';
	var computedModuleClass = 'module ' + moduleName;

	moduleOptions.map(optionName => {
		optionClass += ' option--'+ optionName +'-' + options[optionName];
	});

	return (computedModuleClass + optionClass);
}