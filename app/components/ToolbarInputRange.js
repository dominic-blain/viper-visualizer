import React from 'react';

class ToolbarInputRange extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.name);
	}

	render() {
		return (
			<label>
				<div className="toolbar-option-label">
					{this.props.label}
				</div>
				<div>
					<input type="range" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} />
					<input type="number" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} />
				</div>
			</label>
		);
	}
}

export default ToolbarInputRange;
