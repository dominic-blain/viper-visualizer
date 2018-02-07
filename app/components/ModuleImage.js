import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';

class ModuleImage extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		var computedModuleClass = computeModuleClass('module-image', module.options, options);

		return (
			<section className={computedModuleClass}>
				<figure>
					<img src={this.props.content.image} />
					<figcaption>
						{this.props.content.caption}
					</figcaption>
				</figure>
			</section>
		);
	}
}
export default ModuleImage;
