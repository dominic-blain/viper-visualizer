import React from 'react';
import {connect} from 'react-redux';
import {getOptionsBy} from '../utils';
import ToolbarGroup from './ToolbarGroup';

class Toolbar extends React.Component {
	render() {
		const onInputChange = this.props.onInputChange;
		const optionList = this.props.options;
		var groups = [];

		this.props.optionsGroups.forEach(function(group, index) {
			var groupOptions = getOptionsBy(group.name, optionList);
			if (groupOptions.length >= 1) {
				groups.push(
					<ToolbarGroup
						key={index}
						label={group.label}
						options={groupOptions}
					/>
				);
			}
		});

		return (
			<aside>
				{groups}
			</aside>
		);
	}
}

const mapStateToProps = (state) => (
{
	options: state.options,
	optionsGroups: state.optionsGroups
});

export default connect(mapStateToProps, null)(Toolbar);
