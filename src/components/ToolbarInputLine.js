import React from 'react';

class ToolbarInputLine extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.name, this.props.moduleId);
	}

	render() {
		return (
			<label className="toolbar-input-line">
				<div className="toolbar-option-label">
					{this.props.label}
				</div>
				<div className="toolbar-input-line-wrapper">
					<input type="text" value={this.props.value} onChange={this.handleOptionChange} />
				</div>
			</label>
		);
	}
}

export default ToolbarInputLine;
