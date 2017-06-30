import React from 'react';

class ToolbarTabButton extends React.Component {
	render() {
		return (
			<button data-name={this.props.name}>
				{this.props.label}
			</button>
		);
	}
}

export default ToolbarTabButton;
