import React from 'react';
import {connect} from 'react-redux';
import ModuleText from './ModuleText';


class Article extends React.Component {
	render() {
		const modules = this.props.modules;
		const moduleList = this.props.moduleList;
		const moduleOptions = this.props.moduleOptions;
		const moduleTypes = {
			ModuleText: ModuleText
		}
		var renderModules = [];

		moduleList.map(module => {
			const ModuleComponent = moduleTypes[module.name];

			renderModules.push(
				<ModuleComponent
					content={module.content}
					options={module.options}
					module={modules[module.name]}
				/>
			);
		});



		return (
			<article>
				{renderModules}
			</article>
		);
	}
};

const mapStateToProps = (state) => (
{
	modules: state.modules,
	moduleList: state.moduleList,
	moduleOptions: state.moduleOptions,
	options: state.options
});

export default connect(mapStateToProps, null)(Article);
