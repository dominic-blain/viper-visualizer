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
		var unit;
		if (!!this.props.unit) {
			unit = (<div className="toolbar-input-range-unit">
				{this.props.unit}
			</div>);
		}

		return (
			<label className="toolbar-input-range">
				<div className="toolbar-option-label">
					{this.props.label}
				</div>
				<div className="toolbar-input-range-wrapper">
					<input type="range" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} tabIndex="-1" />
					<input type="number" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} />
						{unit}
				</div>
			</label>
		);
	}
}

export default ToolbarInputRange;
