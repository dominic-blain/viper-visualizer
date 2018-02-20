import React from 'react';

class ButtonAddModule extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onChange(this.props.id);
	}

	render() {
		const schema = this.props.schema;
		var choicesComponents = [];

		// For each module schema
		for (var moduleType in schema) {
			const module = schema[moduleType];
			// Add choice to component list
			choicesComponents.push(
				<option value={moduleType} key={moduleType}>
					{module.label}
				</option>
			);
		}

		choicesComponents.push(
			<option value="" key="default"></option>
		);

		return (
			<div className="button-add-module">
				<select value="" onChange={this.handleChange}>
					{choicesComponents}
				</select>
			</div>
		);
	}
}
export default ButtonAddModule;
