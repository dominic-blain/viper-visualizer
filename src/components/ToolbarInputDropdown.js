import React from 'react';

class ToolbarInputDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const onChangeData = this.props.onChangeData;
		this.props.onChange(event.target.name, event.target.value, onChangeData);
	}

	render() {
		const data = this.props.data;
		var choicesComponents = [];

		// For each choices
		data.choices.map(choice => {
			// Add choice to component list
			choicesComponents.push(
				<option value={choice.value} key={choice.label}>
					{choice.label}
				</option>
			);
		});

		return (
			<label className="toolbar-input-dropdown">
				<div className="toolbar-option-label">
					{data.label}
				</div>
				<div className="toolbar-option-select-ctn">
					<select name={data.name} value={data.value} onChange={this.handleChange}>
						{choicesComponents}
					</select>
				</div>
			</label>
		);
	}
}

export default ToolbarInputDropdown;
