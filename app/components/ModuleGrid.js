import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';

class ModuleGrid extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		var computedModuleClass = computeModuleClass('module-grid', module.options, options);

		return (
			<section className={computedModuleClass}>
				<div className="grid">
					
				</div>
			</section>
		);
	}
}
export default ModuleGrid;
