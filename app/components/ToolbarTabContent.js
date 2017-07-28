import React from 'react';

class ToolbarTabContent extends React.Component {
	render() {
		var compClass = this.props.activeClass + ' toolbar-tab-content';
		return(
			<div className={compClass} data-name={this.props.name}>
				{this.props.groups}
			</div>
		);
	}
}

export default ToolbarTabContent;