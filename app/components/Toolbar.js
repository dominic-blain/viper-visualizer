import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabButton from './ToolbarTabButton';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarGroup from './ToolbarGroup';
import ToolbarOption from './ToolbarOption';
import ButtonSave from './ButtonSave';

class Toolbar extends React.Component {
	render() {
		var tabButtonsComponents = [];
		var tabContentsComponents = [];

		// For each tabs
		this.props.optionTabs.map((tab, index) => {
			// Filter tab groups and options
			var groupsComponents = [];
			var tabActiveClass = (tab.name == this.props.activeTab) ? 'is-active':'';

			tab.option_groups.map(groupName => {
				var groupObject = this.props.optionGroups[groupName];
				var optionsComponents = [];

				groupObject.options.map(optionName => {
					var optionObject = this.props.options[optionName];
					// Generate options component list
					optionsComponents.push(
						<ToolbarOption
							key={optionName}
							data={optionObject}
							fontList={this.props.fonts}
							name={optionName}
							onOptionChange={this.props.onOptionChange}
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
					activeClass={tabActiveClass}
					onClick={this.props.onTabButtonClick}
				/>
			);

			// Generate tab contents component list
			tabContentsComponents.push(
				<ToolbarTabContent
					key={index}
					name={tab.name}
					groups={groupsComponents}
					activeClass={tabActiveClass}
				/>
			);
		});

		return (
			<aside className="toolbar-zone">
				<div className="toolbar-ctn">
					<nav className="toolbar-tabs">
						<div className="toolbar-scroll">
							<div className="toolbar-tabs-wrapper">
								{tabButtonsComponents}
							</div>
						</div>
					</nav>
					<main className="toolbar-content">
						{tabContentsComponents}
					</main>
					<footer className="toolbar-buttons">
						<ButtonSave />
					</footer>
				</div>
			</aside>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onOptionChange: (value, optionName) => dispatch(ActionCreators.updateOption(value, optionName)),
	onFontListChange: (items, optionName) => dispatch(ActionCreators.updateFontList(items, optionName)),
	onTabButtonClick: (tabName) => dispatch(ActionCreators.updateTabs(tabName)),
	onButtonSaveClick: () => dispatch(ActionCreators.saveOptions(this.props.options))
});

const mapStateToProps = (state) => ({
	activeTab: state.activeTab,
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups,
	options: state.options,
	fonts: state.fonts
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
