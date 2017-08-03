import React from 'react';
import { loadGoogleFont } from '../utils';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		var _this = this;
		if (event.target.dataset.method == 'google-font') {
			loadGoogleFont(this.props.name, event.target.value);
			this.props.onOptionChange(event.target.value, this.props.name);
		}
		else if (event.target.dataset.method == 'upload') {
			var files = event.target.files;
			if	(files.length) {
			var fontname = files[0].name;

			var reader = new FileReader();
			reader.onload = function (event) {
				var name = fontname.split('.')[0];
				var extension = fontname.split('.')[1];
				var head = document.getElementsByTagName('head')[0];
				var style = document.createElement('style');
				style.type = "text/css";
				style.id = "local-font";
				style.textContent = "@font-face { font-family: \""+ name +"\"; src: url('"+event.target.result+"'); }";
				head.appendChild(style);
				_this.props.onOptionChange(name, _this.props.name);
			}
			reader.readAsDataURL(files[0]);
		}
		}
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
		return (
			<div className="toolbar-input-font">
				<label>
					<div className="toolbar-option-label">
						{this.props.label}
					</div>
					<div className="toolbar-option-select-ctn">
						<select name={this.props.name} data-method="google-font" defaultValue="default" onChange={this.handleOptionChange}>
							<option value="default"> Choose Google font</option>
							{items}
						</select>
					</div>
				</label>
				<div className="separator"> or </div>
				<label className="input-font-file-ctn">
					<span className="input-font-file-button">
						upload font (zip)
					</span>
					<span className="input-font-file-filename">
						No file chosen
					</span>
					<input type="file" data-method="upload" onChange={this.handleOptionChange} />
				</label>
			</div>
		);
	}
}

export default ToolbarInputFont;
