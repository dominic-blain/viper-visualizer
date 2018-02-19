import React from 'react';

class ToolbarListButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(this.props.id);
	}

	render() {
		return (
			<div className="toolbar-list-button">
				<span>{this.props.title}</span>
			</div>
		);
	}
}
export default ToolbarListButton;
