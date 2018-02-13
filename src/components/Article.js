import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import CustomProperties from 'react-custom-properties';
import Guides from './Guides';
import GuidesSwitch from './GuidesSwitch';
import ModuleText from './ModuleText';
import ModuleImage from './ModuleImage';
import ModuleGrid from './ModuleGrid';


class Article extends React.Component {
	render() {
		const showGuides = this.props.showGuides;
		const shortcuts = this.props.shortcuts;
		const options = this.props.options;
		const optionGroups = this.props.optionGroups;
		const modules = this.props.modules;
		const moduleList = this.props.moduleList;
		const moduleTypes = {
			ModuleText: ModuleText,
			ModuleImage: ModuleImage,
			ModuleGrid: ModuleGrid
		}
		var renderModules = [];
		var CSSVariables = {};

		// For each module...
		for (var moduleId in moduleList) {
			const module = moduleList[moduleId];
			const ModuleComponent = moduleTypes[module.type];

			// Add corresponding component to list
			renderModules.push(
				<ModuleComponent
					content={module.content}
					options={module.options}
					module={modules[module.type]}
				/>
			);
		};

		// Create CSS variables object
		const optionKeys = Object.keys(options);
		optionKeys.map(key => {
			const variableName = '--' + key;
			const variableUnit = options[key].unit || '';
			const variableValue = options[key].value + variableUnit;
			CSSVariables[variableName] = variableValue;
		});

		return (
			<CustomProperties properties={CSSVariables}>
				<article id="page">
					<GuidesSwitch showGuides={showGuides} shortcuts={shortcuts} onClick={this.props.onShowGuidesClick} />
					<Guides options={options} optionGroups={optionGroups} shortcuts={shortcuts} showGuides={showGuides} />
					{renderModules}
				</article>
			</CustomProperties>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	onShowGuidesClick: userAction => dispatch(ActionCreators.toggleGuides(userAction))
});

const mapStateToProps = (state) => ({
	modules: state.modules,
	moduleList: state.moduleList,
	options: state.options,
	optionGroups: state.optionGroups,
	showGuides: state.ui.showGuides,
	shortcuts: state.shortcuts
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);