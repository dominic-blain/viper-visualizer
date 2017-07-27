import React from 'react';

class ToolbarInputFont extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.name);
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
			<label>
				{this.props.label}
				<div>
					<select name="{this.props.name}" defaultValue="default" onChange={this.handleOptionChange}>
						<option value="default"> Choose Google font</option>
						{items}
					</select>
				</div>
			</label>
		);
	}
}

export default ToolbarInputFont;
