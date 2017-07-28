import React from 'react';
import ToolbarOption from './ToolbarOption';

class ToolbarGroup extends React.Component {
	render() {
		return (
			<section className="toolbar-group">
				<h2 className="toolbar-group-title">
					{this.props.label}
				</h2>
				{this.props.options}
			</section>
		);
	}
}
export default ToolbarGroup;
