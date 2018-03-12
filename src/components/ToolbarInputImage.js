import React from 'react';
import { getDataFromFile } from '../utils';

class ToolbarInputImage extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const nextSource = event.target.dataset.source;
		// var data = this.props.data;
		var file = '';
		const defaultUploadText = 'No file chosen';
		const defaultUrlText = 'Copy url..';
		const defaultValue = '';
		var nextUploadText;
		var nextUrlText;
		var nextValue;
		const eventName = event.target.name;

		const fireChange = (value, source, uploadText, urlText) => {
			const image = {
				value: value,
				source: source,
				uploadText: uploadText,
				urlText: urlText
			}
			this.props.onChange(eventName, image.value, image);
		};

		return new Promise((resolve, reject) => {
			switch(nextSource) {
				case 'url':
					nextUploadText = defaultUploadText;
					nextUrlText = event.target.value;
					nextValue = event.target.value;
					resolve({nextValue, nextSource, nextUploadText, nextUrlText});
					break;
				case 'upload':
					file = event.target.files[0];
					nextUploadText = file.name;
					nextUrlText = defaultUrlText;
					getDataFromFile(file, (nextValue) => {
						resolve({nextValue, nextSource, nextUploadText, nextUrlText});
					});
					break;
				default:
					nextUploadText = defaultUploadText;
					nextUrlText = defaultUrlText;
					nextValue = defaultValue;
					resolve({nextValue, nextSource, nextUploadText, nextUrlText});
			}
		}).then(result => {
			const {nextValue, nextSource, nextUploadText, nextUrlText} = result;
			fireChange(nextValue, nextSource, nextUploadText, nextUrlText);
		});
	}

	render() {
		const data = this.props.data;
		const urlActiveClass = (data.source == 'url') ? 'is-active':'';
		const uploadActiveClass = (data.source == 'upload') ? 'is-active':'';
		// const urlPlaceholder = 

		return (
			<div className="toolbar-input-image">
				<label>
					<div className="toolbar-option-label">
						{data.label}
					</div>
					<div className={'toolbar-option-url-ctn ' + urlActiveClass}>
						<input name={data.name} data-source="url" value={data.urlText} onChange={this.handleChange} placeholder='Copy Url...'/>
					</div>
				</label>
				<div className="separator"> or </div>
				<label className={'input-file-ctn ' + uploadActiveClass}>
					<span className="input-file-button">
						upload image (jpg|png|svg)
					</span>
					<span className="input-file-filename">
						{data.uploadText}
					</span>
					<input name={data.name} type="file" data-source="upload" onChange={this.handleChange} />
				</label>
			</div>
		);
	}
}

export default ToolbarInputImage;
