import React from 'react';
import ToolbarOption from './ToolbarOption';

class ToolbarGroup extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const onInputChange = this.props.onInputChange;
		var options = [];
		this.props.options.forEach(function(option, index) {
			options.push(
				<ToolbarOption
					key={index}
					label={option.label}
					value={option.value}
					range={option.range}
					optionName={option.name}
				/>
			);
		});
		return (
			<section>
				<h2>{this.props.label}</h2>
				{options}
			</section>
		);
	}
}
export default ToolbarGroup;
