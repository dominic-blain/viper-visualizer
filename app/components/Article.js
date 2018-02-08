import React from 'react';
import {connect} from 'react-redux';
import CustomProperties from 'react-custom-properties';
import Guides from './Guides';
import ModuleText from './ModuleText';
import ModuleImage from './ModuleImage';
import ModuleGrid from './ModuleGrid';


class Article extends React.Component {
	render() {
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
					<Guides options={options} optionGroups={optionGroups} />
					{renderModules}
				</article>
			</CustomProperties>
		);
	}
};

const mapStateToProps = (state) => (
{
	modules: state.modules,
	moduleList: state.moduleList,
	options: state.options,
	optionGroups: state.optionGroups
});

export default connect(mapStateToProps, null)(Article);
