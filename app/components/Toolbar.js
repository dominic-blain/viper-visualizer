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

		// TAB: Variables
		const optionGroups = this.props.optionGroups;
		const tabVariablesActiveClass = (this.props.activeTab == "variables") ? 'is-active':'';
		var groupsComponents = [];

		// For each group...
		optionGroups.map((group, index) => {
			var optionsComponents = [];

			// Generate options component list
			group.options.map(optionName => {
				const optionObject = this.props.options[optionName];
				optionsComponents.push(
					<ToolbarOption
						key={optionName}
						data={optionObject}
						fontList={this.props.fonts}
						name={optionName}
						onOptionChange={this.props.onOptionChange}
						onFontOptionChange={this.props.onFontOptionChange}
					/>
				);
			});
			// Add this group to groups component list
			groupsComponents.push(
				<ToolbarGroup
					key={index}
					label={group.label}
					options={optionsComponents}
				/>
			);
		});

		return (
			<aside className="toolbar-zone">
				<div className="toolbar-ctn">
					<nav className="toolbar-tabs">
						<div className="toolbar-scroll">
							<div className="toolbar-tabs-wrapper">
								<ToolbarTabButton
									name="variables"
									label="Variables"
									activeClass={tabVariablesActiveClass}
									onClick={this.props.onTabButtonClick}
								/>
							</div>
						</div>
					</nav>
					<main className="toolbar-content">
						<ToolbarTabContent
							name="variables"
							groups={groupsComponents}
							activeClass={tabVariablesActiveClass}
						/>
					</main>
					<footer className="toolbar-buttons">
						<ButtonSave
							saveState={this.props.buttonSaveState}
							onClick={this.props.onButtonSaveClick} 
						/>
					</footer>
				</div>
			</aside>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onOptionChange: (value, optionName) => dispatch(ActionCreators.updateOption(value, optionName)),
	onFontOptionChange: (font, optionName, file) => dispatch(ActionCreators.updateFontOption(font, optionName, file)),
	onFontListChange: (items, optionName) => dispatch(ActionCreators.updateFontList(items, optionName)),
	onTabButtonClick: (tabName) => dispatch(ActionCreators.updateTabs(tabName)),
	onButtonSaveClick: () => dispatch(ActionCreators.saveOptions())
});

const mapStateToProps = (state) => ({
	activeTab: state.activeTab,
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups,
	options: state.options,
	fonts: state.fonts,
	buttonSaveState: state.ui.buttonSaveState
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
