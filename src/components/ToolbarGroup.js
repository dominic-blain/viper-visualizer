import React from 'react';

class ToolbarGroup extends React.Component {
	render() {
		return (
			<section className="toolbar-group">
				<h2 className="toolbar-group-title">
					{this.props.label}
				</h2>
				{this.props.children}
			</section>
		);
	}
}
export default ToolbarGroup;
