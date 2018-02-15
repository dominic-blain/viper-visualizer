import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemMarkdown extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;

		const markdownSchema = schema.content.text;
		const markdown = item.content.text;

		var computedClass = computeOptionsClass('item item-markdown', schema, item);
		var computedMarkdownClass = computeOptionsClass('markdown', markdownSchema, markdown);

		return (
			<div className={computedClass}>
				<ReactMarkdown className={computedMarkdownClass} source={markdown.value} />
			</div>
		);
	}
}
export default ItemMarkdown;
