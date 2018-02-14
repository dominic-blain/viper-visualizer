import React from 'react';
import ReactMarkdown from 'react-markdown';

class ItemMarkdown extends React.Component {
	render() {
		const markdown = this.props.markdown;
		return (
			<ReactMarkdown className="item-markdown" source={markdown} />
		);
	}
}
export default ItemMarkdown;
