import React from 'react';

class ToolbarTabButton extends React.Component {
	render() {
		var name = this.props.data.name;
		var label = this.props.data.label;

		return (
			<button data-name={name}>
				{label}
			</button>
		);
	}
}