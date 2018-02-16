import React from 'react';
import ToolbarOption from './components/ToolbarOption';
import update from 'immutability-helper';
import URLSearchParams from 'url-search-params';

export function loadGoogleFont(name, token) {
	// Get head element
	const head = document.querySelector('head');
	// Make sure there is no upload font for the same token
	const style = document.querySelector('style#'+token.name);
	if (style) { style.remove(); }
	// Get or Create element for this token
	const link = document.querySelector('linl#'+token.name) || document.createElement('link');
	link.id = token.name;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://fonts.googleapis.com/css?family=' + token.value.replace(/ /g, '+');
	link.media = 'all';
	head.appendChild(link);
}

export function loadFileFont(file, token) {
	// Get head element
	const head = document.querySelector('head');
	// Make sure there is no google font for the same token
	const link = document.querySelector('link#'+token.name);
	if (link) { link.remove(); }
	// Get or Create element for this token
	const style = document.querySelector('style#'+token.name) || document.createElement('style');
	style.type = "text/css";
	style.id = token.name;

	// Get file data
	var dataURL = '';
	if (file != null) {
		var reader = new FileReader();
		// When file is read
		reader.onload = event => {
			// Set dataURL and apply changes to DOM
			dataURL = reader.result;
			style.textContent = "@font-face { font-family: \""+ token.value +"\"; src: url('"+dataURL+"'); }";
			head.appendChild(style);
		}
		// Start reading file
		reader.readAsDataURL(file);
	}
}

export function getDataFromFile(file, callback) {
	// Get file data
	if (file != null) {
		var reader = new FileReader();
		// When file is read
		reader.onload = event => {
			callback(reader.result);
		};
		// Start reading file
		reader.readAsDataURL(file);
	}

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

export function computeOptionsClass(elementClass, schema, object) {
	var optionClass = '';
	if (!!schema.options) {
		// For each options..
		schema.options.map(optionName => {
			// Add option class
			optionClass += ' option--'+ optionName +'-' + object.options[optionName];
		});
	}
	return (elementClass + optionClass);
}

export function renderOptionsFrom(schema, object, options, onOptionChange) {
	var render = [];
	if (!!schema.options) {
		// For each options...
		schema.options.map(optionName => {
			const option = options[optionName];
			const optionValue = object.options[optionName];
			// Add option component to render list;
			render.push(
				<ToolbarOption
					key={optionName}
					option={option}
					value={optionValue}
					belongsTo={object.id}
					onOptionChange={onOptionChange}
				/>
			);
		});
	}
	return render;
}

export function findTypeFrom(id) {
	if (id.startsWith('Module')) {
		return 'modules';
	}
	else if (id.startsWith('Item')) {
		return 'items';
	}
	else {
		return 'contents';
	}
}