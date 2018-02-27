import React from 'react';

class ButtonAddItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const type = event.target.value;
		const moduleId = this.props.moduleId;
		const extraOptions = this.props.extraOptions;
		this.props.onChange(type, moduleId, extraOptions);
	}

	render() {
		const itemsSchema = this.props.schema;
		var choicesComponents = [];

		// For each item schema
		for (var itemType in itemsSchema) {
			const item = itemsSchema[itemType];
			// Add choice to component list
			choicesComponents.push(
				<option value={itemType} key={itemType}>
					{item.label}
				</option>
			);
		}

		choicesComponents.push(
			<option value="" key="default"></option>
		);

		return (
			<div className="button-add-item">
				<select value="" onChange={this.handleChange}>
					{choicesComponents}
				</select>
			</div>
		);
	}
}
export default ButtonAddItem;
