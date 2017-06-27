import React from 'react';
// import ToolbarGroup from 'ToolbarGroup';

class Toolbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const onInputChange = this.props.onInputChange;
		const optionList = this.props.options;
		var groups = [];

		this.props.optionsGroups.forEach(function(group) {
			var groupOptions = getOptionsBy(group.name, optionList);
			if (groupOptions.length >= 1) {
				groups.push(
					<ToolbarGroup
						label={group.label}
						options={groupOptions}
						onInputChange={onInputChange}
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
export default Toolbar;
