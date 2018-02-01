import React from 'react';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
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

		var source = this.props.source;
		var googleFontActiveClass = (source == 'google-font') ? 'is-active':'';
		var uploadFontActiveClass = (source == 'upload') ? 'is-active':'';

		return (
			<div className="toolbar-input-font">
				<label>
					<div className="toolbar-option-label">
						{this.props.label}
					</div>
					<div className={'toolbar-option-select-ctn ' + googleFontActiveClass}>
						<select name={this.props.name} data-source="google-font" value={this.props.googleFontText} onChange={this.handleOptionChange}>
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
						{this.props.uploadText}
					</span>
					<input type="file" data-source="upload" onChange={this.handleOptionChange} />
				</label>
			</div>
		);
	}
}

export default ToolbarInputFont;
