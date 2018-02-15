import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemImage extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;

		const imageSchema = schema.content.image;
		const image = item.content.image;
		const captionSchema = schema.content.caption;
		const caption = item.content.caption;

		const computedClass = computeOptionsClass('item item-image', schema, item);
		const computedImageClass = computeOptionsClass('image', imageSchema, image);
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
