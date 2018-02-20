import React from 'react';

class ButtonAddModule extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const type = event.target.value;
		// const schema = this.props.schema[type];
		// const typeCounter = countModulesBy(type);
		// const id = type + '-' + typeCounter;
		this.props.onChange(type);
	}

	render() {
		const modulesSchema = this.props.schema;
		var choicesComponents = [];

		// For each module schema
		for (var moduleType in modulesSchema) {
			const module = modulesSchema[moduleType];
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
