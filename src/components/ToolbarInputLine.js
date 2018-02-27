import React from 'react';

class ToolbarInputLine extends React.Component {
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
		return (
			<label className="toolbar-input-line">
				<div className="toolbar-option-label">
					{data.label}
				</div>
				<div className="toolbar-input-line-wrapper">
					<input type="text" name={data.name} value={data.value} onChange={this.handleChange} />
				</div>
			</label>
		);
	}
}

export default ToolbarInputLine;
