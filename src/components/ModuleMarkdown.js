import React from 'react';
import { computeOptionsClass } from '../utils';

class ModuleMarkdown extends React.Component {
	render() {
		const schema = this.props.schema;
		const module = this.props.module;
		const item = this.props.items[0];
		const computedClass = computeOptionsClass('module module-markdown', schema, module);

		return (
			<section className={computedClass}>
				{item}
			</section>
		);
	}
}
export default ModuleMarkdown;
