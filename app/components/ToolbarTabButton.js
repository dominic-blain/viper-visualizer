import React from 'react';

class ToolbarTabButton extends React.Component {
	render() {
		var compClass = this.props.activeClass + ' toolbar-tab-button';
		return (
			<button className={compClass} data-name={this.props.name}>
				{this.props.label}
			</button>
		);
	}
}

export default ToolbarTabButton;
