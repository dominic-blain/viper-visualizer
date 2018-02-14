import React from 'react';
import ReactMarkdown from 'react-markdown';

class ItemText extends React.Component {
	render() {
		const text = this.props.text;
		return (
			<div className="item-text">
				{text}
			</div>
		);
	}
}
export default ItemText;
