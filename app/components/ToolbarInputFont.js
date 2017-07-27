import React from 'react';
import { loadGoogleFont } from '../utils';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		if (event.target.dataset.method == 'google-font') {
			loadGoogleFont(this.props.name, event.target.value);
			this.props.onOptionChange(event.target.value, this.props.name);
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
			<div>
				<label>
					{this.props.label}
					<div>
						<select name={this.props.name} data-method="google-font" defaultValue="default" onChange={this.handleOptionChange}>
							<option value="default"> Choose Google font</option>
							{items}
						</select>
					</div>
				</label>
				<div> or </div>
				<div>
					<input type="file" data-method="upload" />
				</div>
			</div>
		);
	}
}

export default ToolbarInputFont;
