import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemMarkdown extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;
		const contents = this.props.contents;

		const markdown = contents[item.content[0]];
		const markdownSchema = schema.content[markdown.type];

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
