import React from 'react';
import {connect} from 'react-redux';
import ToolbarTabButton from './ToolbarNavButton';
import ToolbarTabContent from './ToolbarNavContent';

class Toolbar extends React.Component {
	render() {
		var tabButtons = [];
		var tabContents = [];

		// For each tabs
		this.props.optionTabs.map((tab, index) => ({
			// Filter tab groups
			var groups = [];
			tab.option_groups.map(group => ({
				groups.push(
					this.props.optionGroups[group];
				);
			}));
			// Add button
			tabButtons.push(
				<ToolbarTabButton
					key="index"
					data="tab"
				/>
			);
			// Add contents
			tabContents.push(
				<ToolbarTabContent
					key="index"
					data="tab"
					groups={groups};
				/>
			);
		}));

		return (
			<aside>
				<nav>
					{tabButtons}
				</nav>
				<main>
					{tabContents}
				</main>
			</aside>
		);
	}
}

const mapStateToProps = (state) => (
{
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups
});

export default connect(mapStateToProps, null)(Toolbar);
