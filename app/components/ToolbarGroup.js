import React from 'react';
import ToolbarOption from './ToolbarOption';

class ToolbarGroup extends React.Component {
	render() {
		return (
			<section>
				<h2>{this.props.label}</h2>
				{this.props.options}
			</section>
		);
	}
}
export default ToolbarGroup;
