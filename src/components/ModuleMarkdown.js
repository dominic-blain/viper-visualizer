import React from 'react';
import ItemMarkdown from './ItemMarkdown';
import { computeModuleClass } from '../utils';

class ModuleMarkdown extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const item = this.props.items[0];
		const text = item.content.text.value;
		var computedModuleClass = computeModuleClass('module-markdown', module.options, options);

		return (
			<section className={computedModuleClass}>
				<ItemMarkdown content={text} />
			</section>
		);
	}
}
export default ModuleMarkdown;
