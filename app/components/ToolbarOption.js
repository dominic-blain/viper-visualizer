import React from 'react';
import ToolbarInputRange from './ToolbarInputRange';
import ToolbarInputFont from './ToolbarInputFont';

class ToolbarOption extends React.Component {
	render() {
		var input;
		switch(this.props.data.type) {
			case "range":
				input = (
					<ToolbarInputRange
						name={this.props.name}
						range={this.props.data.range}
						value={this.props.data.value}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
			case "font":
				input = (
					<ToolbarInputFont
						name={this.props.name}
						value={this.props.data.value}
						items={this.props.data}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
		}

		return (
			<label>
				{this.props.label}
				<div>
					{input}
				</div>
			</label>
		);
	}
};

export default ToolbarOption;
