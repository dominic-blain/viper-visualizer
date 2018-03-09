import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemImage extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;
		const contents = this.props.contents;

		const image = contents[item.content[0]];
		const imageSchema = schema.content[image.type];
		const caption = contents[item.content[1]];
		const captionSchema = schema.content[caption.type];

		const computedClass = computeOptionsClass('item item-image', schema, item);
		const computedImageClass = computeOptionsClass('image', imageSchema, image) + (image.value == '' ? ' no-src' : '');
		const computedCaptionClass = computeOptionsClass('caption', captionSchema, caption);

		return (
			<figure className={computedClass}>
				<img className={computedImageClass} src={image.value} />
				<figcaption className={computedCaptionClass}>
					{caption.value}
				</figcaption>
			</figure>
		);
	}
}
export default ItemImage;
