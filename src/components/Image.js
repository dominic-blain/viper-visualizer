import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';

class ModuleImage extends React.Component {
	render() {
		const content = this.props.content;
		return (
			<figure className="image">
				<img src={content.image} />
				<figcaption>
					{content.caption}
				</figcaption>
			</figure>
		);
	}
}
export default ModuleImage;
