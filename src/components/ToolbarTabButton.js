import React from 'react';

class ToolbarTabButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(this.props.name);
	}

	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const compClass = 'toolbar-tab-button ' + tabActiveClass;
		return (
			<button className={compClass} data-name={this.props.name} onClick={this.handleClick}>
				{this.props.label}
			</button>
		);
	}
}

export default ToolbarTabButton;
