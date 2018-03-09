import React from 'react';
import ToolbarInputRange from './ToolbarInputRange';
import ToolbarInputFont from './ToolbarInputFont';
import ToolbarInputDropdown from './ToolbarInputDropdown';
import ToolbarInputLine from './ToolbarInputLine';
import ToolbarInputTextarea from './ToolbarInputTextarea';
import { findTypeFrom } from '../utils';

class ToolbarItem extends React.Component {
	render() {
		return (
			<div className="toolbar-item">
				<div className="toolbar-item-content">
					{this.props.children}
				</div>
				<div className="toolbar-item-options">
					{this.props.options}
				</div>
			</div>
		);
	}
};

export default ToolbarItem;