import React from 'react';

class ToolbarTabList extends React.Component {
	render() {
		return(
			<div className="toolbar-tab-list" data-name={this.props.name}>
				<div className="buttons-ctn">
					{this.props.children}
				</div>
				<div className="items-ctn">
					{this.props.items}
				</div>
			</div>
		);
	}
}

export default ToolbarTabList;