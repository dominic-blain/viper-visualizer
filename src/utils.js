import React from 'react';
import ToolbarOption from './components/ToolbarOption';
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