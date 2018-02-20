import React from 'react';

class ToolbarAccordionButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(this.props.id);
	}

	render() {
		return (
			<button className="toolbar-accordion-button" onClick={this.handleClick}>
				<span>{this.props.title}</span>
			</button>
		);
	}
}
export default ToolbarAccordionButton;
