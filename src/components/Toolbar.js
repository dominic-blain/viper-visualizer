import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabButton from './ToolbarTabButton';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarTabList from './ToolbarTabList';
import ToolbarListButton from './ToolbarListButton';
import ToolbarGroup from './ToolbarGroup';
import ToolbarInput from './ToolbarInput';
import ToolbarModule from './ToolbarModule';
import TabModules from './TabModules';
import ButtonSave from './ButtonSave';

class Toolbar extends React.Component {
	render() {
		const tabActiveClass = {
			variables: this.props.activeTab == "variables" ? 'is-active' : '',
			typography: this.props.activeTab == "typography" ? 'is-active' : '',
			modules: this.props.activeTab == "modules" ? 'is-active' : ''
		};
		const activeTab = {
			variables: this.props.activeTab == "variables",
			typography: this.props.activeTab == "typography",
			modules: this.props.activeTab == "modules"
		};
		const activeTabItem = this.props.activeTabItem;

		// TAB: Variables
		const optionGroups = this.props.optionGroups;
		const options = this.props.options;
		var groupsComponents = [];

		// For each group...
		for (var groupName in optionGroups) {
			const group = optionGroups[groupName];
			var optionsComponents = [];

			// Generate options component list
			group.options.map(optionName => {
				const optionObject = options[optionName];
				optionsComponents.push(
					<ToolbarInput
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
					key={groupName}
					label={group.label}>
					{optionsComponents}
				</ToolbarGroup>
			);
		}

		// TAB: Text recipes
		const typography = this.props.typography;
		var recipesComponents = [];

		// For each recipe...
		typography.map(recipe => {
			const optionFontFamily = options[recipe.font];
			const optionFontSize = options[recipe.size];
			var optionsComponents = [];

			// Add font family option
			optionsComponents.push(
				<ToolbarInput
					key={recipe.font}
					data={optionFontFamily}
					fontList={this.props.fonts}
					name={recipe.font}
					onOptionChange={this.props.onOptionChange}
					onFontOptionChange={this.props.onFontOptionChange}
				/>
			);
			// Add font size option
			optionsComponents.push(
				<ToolbarInput
					key={recipe.size}
					data={optionFontSize}
					fontList={this.props.fonts}
					name={recipe.size}
					onOptionChange={this.props.onOptionChange}
					onFontOptionChange={this.props.onFontOptionChange}
				/>
			);

			// Add this recipe to recipes list
			recipesComponents.push(
				<ToolbarGroup
					key={recipe.name}
					label={recipe.label}>
					{optionsComponents}
				</ToolbarGroup>
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
									activeClass={tabActiveClass.variables}
									onClick={this.props.onTabButtonClick}
								/>
								<ToolbarTabButton
									name="typography"
									label="Typography"
									activeClass={tabActiveClass.typography}
									onClick={this.props.onTabButtonClick}
								/>
								<ToolbarTabButton
									name="modules"
									label="Modules"
									activeClass={tabActiveClass.modules}
									onClick={this.props.onTabButtonClick}
								/>
							</div>
						</div>
					</nav>
					<main className="toolbar-content">
						<ToolbarTabContent
							name="variables"
							activeClass={tabActiveClass.variables}>
							{groupsComponents}
						</ToolbarTabContent>
						<ToolbarTabContent
							name="typography"
							activeClass={tabActiveClass.typography}>
							{recipesComponents}
						</ToolbarTabContent>
						<TabModules isActive={activeTab.modules}/>
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
	onModuleOptionChange: (value, optionName, moduleId) => dispatch(ActionCreators.updateModuleOption(value, optionName, moduleId)),
	onModuleContentChange: (value, contentName, moduleId) => dispatch(ActionCreators.updateModuleContent(value, contentName, moduleId)),
	onTabButtonClick: (tabName) => dispatch(ActionCreators.changeTab(tabName)),
	onTabListButtonClick: (itemName) => dispatch(ActionCreators.changeTabItem(itemName)),
	onButtonSaveClick: () => dispatch(ActionCreators.saveProject())
});

const mapStateToProps = (state) => ({
	activeTab: state.activeTab,
	activeTabItem: state.activeTabItem,
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups,
	options: state.options,
	modules: state.modules,
	moduleOptions: state.moduleOptions,
	moduleList: state.moduleList,
	typography: state.typography,
	fonts: state.fonts,
	buttonSaveState: state.ui.buttonSaveState
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
