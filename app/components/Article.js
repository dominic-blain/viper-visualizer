import React from 'react';
import {connect} from 'react-redux';
import CustomProperties from 'react-custom-properties';
import ModuleText from './ModuleText';


class Article extends React.Component {
	render() {
		const options = this.props.options;
		const modules = this.props.modules;
		const moduleList = this.props.moduleList;
		const moduleTypes = {
			ModuleText: ModuleText
		}
		var renderModules = [];
		var CSSVariables = {};

		// For each module...
		moduleList.map(module => {
			const ModuleComponent = moduleTypes[module.name];

			// Add corresponding component to list
			renderModules.push(
				<ModuleComponent
					content={module.content}
					options={module.options}
					module={modules[module.name]}
				/>
			);
		});

		// Create CSS variables
		var optionKeys = Object.keys(options);
		optionKeys.map(key => {
			var variableName = '--' + key;
			var variableValue = options[key].value + options[key].unit;
			CSSVariables[variableName] = variableValue;
		});

		return (
			<CustomProperties properties={CSSVariables}>
				<article id="page">
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
	options: state.options
});

export default connect(mapStateToProps, null)(Article);
