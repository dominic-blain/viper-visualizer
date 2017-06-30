import React from 'react';

class ToolbarTabContent extends React.Component {
	render() {
		return(
			<div data-name={this.props.name}>
				{this.props.groups}
			</div>
		);
	}
}

export default ToolbarTabContent;
