import React from 'react';
import {connect} from 'react-redux';
import ToolbarTabButton from './ToolbarTabButton';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarGroup from './ToolbarGroup';
import ToolbarOption from './ToolbarOption';

class Toolbar extends React.Component {
	render() {
		var tabButtonsComponents = [];
		var tabContentsComponents = [];

		// For each tabs
		this.props.optionTabs.map((tab, index) => {
			// Filter tab groups and options
			var groupsComponents = [];
			var optionsComponents = [];
			tab.option_groups.map(groupName => {
				var groupObject = this.props.optionGroups[groupName];

				groupObject.options.map(optionName => {
					var optionObject = this.props.options[optionName];
					// Generate options component list
					optionsComponents.push(
						<ToolbarOption
							key={optionName}
							data={optionObject}
						/>
					);
				});

				// Generate tab groups component list
				groupsComponents.push(
					<ToolbarGroup
						key={groupName}
						label={groupObject.label}
						options={optionsComponents}
					/>
				);

			});
			// Generate tab buttons component list
			tabButtonsComponents.push(
				<ToolbarTabButton
					key={index}
					name={tab.name}
					label={tab.label}
				/>
			);

			// Generate tab contents component list
			tabContentsComponents.push(
				<ToolbarTabContent
					key={index}
					name={tab.name}
					groups={groupsComponents}
				/>
			);
		});

		return (
			<aside>
				<nav>
					{tabButtonsComponents}
				</nav>
				<main>
					{tabContentsComponents}
				</main>
			</aside>
		);
	}
}

const mapStateToProps = (state) => (
{
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups,
	options: state.options
});

export default connect(mapStateToProps, null)(Toolbar);
