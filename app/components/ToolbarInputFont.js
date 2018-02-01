import React from 'react';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			source: '',
			googleFontValue: 'default',
			uploadName: 'No file chosen'
		}
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		const nextSource = event.target.dataset.source;
		// var data = this.props.data;
		var file = '';
		var defaultUploadText = 'No file chosen';
		var defaultGoogleFontText = 'default';
		var defaultFontName = 'Arial';
		var nextUploadText;
		var nextGoogleFontText;
		var nextFontName;
		var nextData;

		switch(nextSource) {
			case 'google-font':
				nextUploadText = defaultUploadText;
				nextGoogleFontText = event.target.value;
				nextFontName = event.target.value;
				break;
			case 'upload':
				file = event.target.files[0];
				nextuploadText = file.name.replace('-', ' ');
				nextFontName = file.name.split('.')[0];
				nextData = event.target.result;
				break;
			default:
				nextuploadText = defaultUploadText;
				nextGoogleFontText = defaultGoogleFontText;
				nextFontName = defaultFontName;
		}

		const font = {
			value: nextFontName,
			source: nextSource,
			uploadText: nextUploadText,
			googleFontText: nextGoogleFontText,
			data: nextData
		}

		this.props.onOptionChange(font, this.props.name, file);


		// if (event.target.dataset.source == 'google-font') {
		// 	loadGoogleFont(this.props.name, event.target.value);
		// 	this.setState({source: 'google-font', googleFontValue: event.target.value, uploadName: 'No file chosen'});
		// 	this.props.onOptionChange(event.target.value, {value:this.props.name});
		// }
		// else if (event.target.dataset.source == 'upload') {
		// 	var files = event.target.files;
		// 	if	(files.length) {
		// 		var fontname = files[0].name;

		// 		var reader = new FileReader();
		// 		reader.onload = function (event) {
		// 			var name = fontname.split('.')[0];
		// 			var displayName = name.replace('-', ' ');
		// 			var extension = fontname.split('.')[1];
		// 			var head = document.getElementsByTagName('head')[0];
		// 			var style = document.createElement('style');
		// 			style.type = "text/css";
		// 			style.id = "local-font";
		// 			style.textContent = "@font-face { font-family: \""+ name +"\"; src: url('"+event.target.result+"'); }";
		// 			head.appendChild(style);
		// 			_this.setState({source: 'upload', uploadName: displayName, googleFontValue:'default'});
		// 			_this.props.onOptionChange(name, {value:_this.props.name});
		// 		}
		// 		reader.readAsDataURL(files[0]);
		// 	}
		// }
	}

	render() {
		var items = [];
		this.props.fontList.map(font => {
			items.push(
				<option value={font.value} key={font.name}>
					{font.name}
				</option>
			);
		})

		var source = this.state.source;
		var googleFontActiveClass = (source == 'google-font') ? 'is-active':'';
		var uploadFontActiveClass = (source == 'upload') ? 'is-active':'';

		return (
			<div className="toolbar-input-font">
				<label>
					<div className="toolbar-option-label">
						{this.props.label}
					</div>
					<div className={'toolbar-option-select-ctn ' + googleFontActiveClass}>
						<select name={this.props.name} data-source="google-font" value={this.state.googleFontValue} onChange={this.handleOptionChange}>
							<option value="default"> Choose Google font</option>
							{items}
						</select>
					</div>
				</label>
				<div className="separator"> or </div>
				<label className={'input-font-file-ctn ' + uploadFontActiveClass}>
					<span className="input-font-file-button">
						upload font (zip)
					</span>
					<span className="input-font-file-filename">
						{this.state.uploadName}
					</span>
					<input type="file" data-source="upload" onChange={this.handleOptionChange} />
				</label>
			</div>
		);
	}
}

export default ToolbarInputFont;
