import React from 'react';
import ReactMarkdown from 'react-markdown';

class ItemImage extends React.Component {
	render() {
		const image = this.props.image;
		const caption = this.props.caption;
		return (
			<figure className="item-image">
				<img src={image} />
				<figcaption>
					{caption}
				</figcaption>
			</figure>
		);
	}
}
export default ItemImage;
