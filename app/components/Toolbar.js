import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabButton from './ToolbarTabButton';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarGroup from './ToolbarGroup';
import ToolbarOption from './ToolbarOption';
import ToolbarModule from './ToolbarModule';
import ButtonSave from './ButtonSave';

class Toolbar extends React.Component {
	render() {
		var tabActiveClass = {
			variables: this.props.activeTab == "variables" ? 'is-active' : '',
			modules: this.props.activeTab == "modules" ? 'is-active' : ''
		};

		// TAB: Variables
		const optionGroups = this.props.optionGroups;
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

		// TAB: Modules list
		const modules = this.props.modules;
		const moduleList = this.props.moduleList;
		const moduleOptions = this.props.moduleOptions;
		var moduleListComponents = [];

		// For each module...
		for (var moduleId in moduleList) {
			const module = moduleList[moduleId];
			var optionsComponents = [];

			// For each options...
			modules[module.type].options.map((optionName, index) => {
				const optionObject = moduleOptions[optionName];
				const optionValue = module.options[optionName];
				// Add this option to options components list
				optionsComponents.push(
					<ToolbarOption
						key={optionName}
						data={optionObject}
						value={module.options[optionName]}
						name={optionName}
						moduleId={moduleId}
						onOptionChange={this.props.onModuleOptionChange}
					/>
				);
			});

			// Add this module to modules components list
			moduleListComponents.push(
				<ToolbarModule
					key={moduleId}
					title={module.title}>
					{optionsComponents}
				</ToolbarModule>
			);
		};

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
							name="modules"
							activeClass={tabActiveClass.modules}>
							{moduleListComponents}
						</ToolbarTabContent>
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
	onTabButtonClick: (tabName) => dispatch(ActionCreators.updateTabs(tabName)),
	onButtonSaveClick: () => dispatch(ActionCreators.saveProject())
});

const mapStateToProps = (state) => ({
	activeTab: state.activeTab,
	optionTabs: state.optionTabs,
	optionGroups: state.optionGroups,
	options: state.options,
	modules: state.modules,
	moduleOptions: state.moduleOptions,
	moduleList: state.moduleList,
	fonts: state.fonts,
	buttonSaveState: state.ui.buttonSaveState
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
