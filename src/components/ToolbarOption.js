import React from 'react';
import ToolbarInputRange from './ToolbarInputRange';
import ToolbarInputFont from './ToolbarInputFont';
import ToolbarInputDropdown from './ToolbarInputDropdown';
import ToolbarInputLine from './ToolbarInputLine';
import ToolbarInputTextarea from './ToolbarInputTextarea';

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
			case "dropdown":
				input = (
					<ToolbarInputDropdown
						name={this.props.name}
						label={this.props.data.label}
						options={this.props.data.options}
						value={this.props.value}
						moduleId={this.props.moduleId}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
			case "line":
				input = (
					<ToolbarInputLine
						name={this.props.name}
						label={this.props.data.label}
						value={this.props.value}
						moduleId={this.props.moduleId}
						onOptionChange={this.props.onOptionChange}
					/>
				);
				break;
			case "textarea":
				input = (
					<ToolbarInputTextarea
						name={this.props.name}
						label={this.props.data.label}
						value={this.props.value}
						moduleId={this.props.moduleId}
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
						googleFontText={this.props.data.googleFontText}
						uploadText={this.props.data.uploadText}
						source={this.props.data.source}
						onOptionChange={this.props.onFontOptionChange}
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
