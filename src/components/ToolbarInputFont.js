import React from 'react';
import { getDataFromFile } from '../utils';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const name = this.props.data.name;
		const nextSource = event.target.dataset.source;
		var file = '';
		const defaultUploadText = 'No file chosen';
		const defaultGoogleFontText = 'default';
		const defaultFontName = 'Arial';
		const defaultFile = '';
		var nextUploadText;
		var nextGoogleFontText;
		var nextFontName;
		var nextFileData;

		const fireChange = (fontName, uploadText, googleFontText, fileData) => {
			const font = {
				name: name,
				value: fontName,
				source: nextSource,
				uploadText: uploadText,
				googleFontText: googleFontText,
				fileData: fileData
			}
			this.props.onChange(name, font);
		};

		return new Promise((resolve, reject) => {
			switch(nextSource) {
				case 'google-font':
					nextUploadText = defaultUploadText;
					nextGoogleFontText = event.target.value;
					nextFontName = event.target.value;
					nextFileData = defaultFile;
					resolve({nextFontName, nextUploadText, nextGoogleFontText, nextFileData});
					break;
				case 'upload':
					file = event.target.files[0];
					nextUploadText = file.name.replace('-', ' ');
					nextGoogleFontText = defaultGoogleFontText;
					nextFontName = file.name.split('.')[0];
					getDataFromFile(file, (nextFileData) => {
						resolve({nextFontName, nextUploadText, nextGoogleFontText, nextFileData});
					});
					break;
				default:
					nextUploadText = defaultUploadText;
					nextGoogleFontText = defaultGoogleFontText;
					nextFontName = defaultFontName;
					nextFileData = defaultFile;
					resolve({nextFontName, nextUploadText, nextGoogleFontText, nextFileData});
			}
		}).then(result => {
			const {nextFontName, nextUploadText, nextGoogleFontText, nextFileData} = result;
			fireChange(nextFontName, nextUploadText, nextGoogleFontText, nextFileData);
		});
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
