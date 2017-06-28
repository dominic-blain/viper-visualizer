import React from 'react';

class ToolbarOption extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleInputChange = this.handleInputChange.bind(this);
	// }

	// handleInputChange(e) {
	// 	this.props.onInputChange(e.target.value, this.props.optionName);
	// }

	render() {
		return (
			<label>
				{this.props.label}
				<div>
					<input type="range" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleInputChange} />
					<input type="number" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleInputChange} />
				</div>
			</label>
		);
	}
}
export default ToolbarOption;
