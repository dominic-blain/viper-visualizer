import React from 'react';
import ReactMarkdown from 'react-markdown';
import ItemImage from './ItemImage';
import { computeModuleClass } from '../utils';

class ModuleImage extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const item = this.props.items[0];
		const image = item.content.image.value;
		const caption = item.content.caption.value;
		var computedModuleClass = computeModuleClass('module-image', module.options, options);

		return (
			<section className={computedModuleClass}>
				<ItemImage image={image} caption={caption} />
			</section>
		);
	}
}
export default ModuleImage;
