import update from 'immutability-helper';

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