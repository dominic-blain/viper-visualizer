import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';

class ModuleText extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		var computedModuleClass = computeModuleClass('module-text', module.options, options);

		return (
			<section className={computedModuleClass}>
				<ReactMarkdown className="markdown" source={content.text} />
			</section>
		);
	}
}
export default ModuleText;
