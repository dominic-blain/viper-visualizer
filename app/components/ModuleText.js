import React from 'react';
import { computeModuleClass } from '../utils';

class ModuleText extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		var computedModuleClass = computeModuleClass('module-text', module.options, options);

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
