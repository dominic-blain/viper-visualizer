import React from 'react';

class ModuleText extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		var optionClasses = '';

		module.options.map(optionName => {
			console.log(optionName);
			optionClasses += ' option--'+ optionName +'-' + options[optionName];
		});
		var computedModuleClass = 'module module-text' + optionClasses;

		return (
			<section className={computedModuleClass}>
				<div>
					<h2>{this.props.content.title}</h2>
					<p>{this.props.content.text}</p>
				</div>
			</section>
		);
	}
}
export default ModuleText;
