import React from 'react';

class ToolbarInputDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.name, this.props.moduleId);
	}

	render() {
		var items = [];
		this.props.options.map(option => {
			items.push(
				<option value={option.value} key={option.label}>
					{option.label}
				</option>
			);
		});

		return (
			<label className="toolbar-input-dropdown">
				<div className="toolbar-option-label">
					{this.props.label}
				</div>
				<div className="toolbar-option-select-ctn">
					<select name={this.props.name} value={this.props.value} onChange={this.handleOptionChange}>
						{items}
					</select>
				</div>
			</label>
		);
	}
}

export default ToolbarInputDropdown;
