import React from 'react';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
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
				nextUploadText = file.name.replace('-', ' ');
				nextFontName = file.name.split('.')[0];
				break;
			default:
				nextUploadText = defaultUploadText;
				nextGoogleFontText = defaultGoogleFontText;
				nextFontName = defaultFontName;
		}

		const font = {
			name: this.props.data.name,
			value: nextFontName,
			source: nextSource,
			uploadText: nextUploadText,
			googleFontText: nextGoogleFontText
		}
		this.props.onChange(event.target.name, font, file);
	}

	render() {
		const data = this.props.data;
		const googleFontActiveClass = (data.source == 'google-font') ? 'is-active':'';
		const uploadFontActiveClass = (data.source == 'upload') ? 'is-active':'';
		var choicesComponents = [];

		data.fonts.map(font => {
			choicesComponents.push(
				<option value={font.value} key={font.name}>
					{font.name}
				</option>
			);
		});

		return (
			<div className="toolbar-input-font">
				<label>
					<div className="toolbar-option-label">
						{data.label}
					</div>
					<div className={'toolbar-option-select-ctn ' + googleFontActiveClass}>
						<select name={data.name} data-source="google-font" value={data.googleFontText} onChange={this.handleChange}>
							<option value="default"> Choose Google font</option>
							{choicesComponents}
						</select>
					</div>
				</label>
				<div className="separator"> or </div>
				<label className={'input-font-file-ctn ' + uploadFontActiveClass}>
					<span className="input-font-file-button">
						upload font (zip)
					</span>
					<span className="input-font-file-filename">
						{data.uploadText}
					</span>
					<input name={data.name} type="file" accept=".woff,.woff2,.otf,.ttf" data-source="upload" onChange={this.handleChange} />
				</label>
			</div>
		);
	}
}

export default ToolbarInputFont;
