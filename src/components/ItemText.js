import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemText extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;
		const contents = this.props.contents;

		const textSchema = schema.content[item.content[0].name];
		const text = contents[item.content[0]];

		const computedClass = computeOptionsClass('item item-text', schema, item);
		const computedTextClass = computeOptionsClass('text', textSchema, text);
		return (
			<div className={computedClass}>
				<p className={computedTextClass}>
					{text.value}
				</p>
			</div>
		);
	}
}
export default ItemText;
