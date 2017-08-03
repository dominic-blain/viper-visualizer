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
						label={this.props.data.label}
						range={this.props.data.range}
						value={this.props.data.value}
						unit={this.props.data.unit}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
			case "font":
				input = (
					<ToolbarInputFont
						name={this.props.name}
						label={this.props.data.label}
						value={this.props.data.value}
						fontList={this.props.fontList}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
		}

		return (
			<div>
				{this.props.label}
				<div>
					{input}
				</div>
			</div>
		);
	}
};

export default ToolbarOption;
