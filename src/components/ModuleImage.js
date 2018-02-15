import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ModuleImage extends React.Component {
	render() {
		const schema = this.props.schema;
		const module = this.props.module;
		const item = this.props.items[0];
		const computedClass = computeOptionsClass('module module-image', schema, module);

		return (
			<section className={computedClass}>
				{item}
			</section>
		);
	}
}
export default ModuleImage;
