import React from 'react';

class ToolbarInputTextarea extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.name, this.props.moduleId);
	}

	render() {
		return (
			<label className="toolbar-input-textarea">
				<div className="toolbar-option-label">
					{this.props.label}
				</div>
				<div className="toolbar-input-textarea-wrapper">
					<textarea type="text" value={this.props.value} onChange={this.handleOptionChange}>
						{this.props.value}
					</textarea>
				</div>
			</label>
		);
	}
}

export default ToolbarInputTextarea;
