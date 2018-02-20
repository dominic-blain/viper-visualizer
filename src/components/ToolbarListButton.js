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
			<button className="toolbar-list-button" onClick={this.handleClick}>
				<span>{this.props.title}</span>
			</button>
		);
	}
}
export default ToolbarListButton;
