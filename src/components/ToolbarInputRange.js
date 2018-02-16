import React from 'react';

class ToolbarInputRange extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const onChangeData = this.props.onChangeData;
		this.props.onChange(event.target.name, event.target.value, onChangeData);
	}

	render() {
		const data = this.props.data;
		var unit;
		if (!!data.unit) {
			unit = (<div className="toolbar-input-range-unit">
				{data.unit}
			</div>);
		}

		return (
			<label className="toolbar-input-range">
				<div className="toolbar-option-label">
					{data.label}
				</div>
				<div className="toolbar-input-range-wrapper">
					<input 
						name={data.name}
						type="range"
						min={data.range.min}
						max={data.range.max}
						value={data.value}
						onChange={this.handleChange}
						tabIndex="-1"
					/>
					<input
						name={data.name}
						type="number"
						min={data.range.min}
						max={data.range.max}
						value={data.value}
						onChange={this.handleChange}
					/>
					{unit}
				</div>
			</label>
		);
	}
}

export default ToolbarInputRange;
