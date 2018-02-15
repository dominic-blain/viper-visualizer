import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeOptionsClass } from '../utils';

class ItemText extends React.Component {
	render() {
		const schema = this.props.schema;
		const item = this.props.item;

		const textSchema = schema.content.text;
		const text = item.content.text;

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
