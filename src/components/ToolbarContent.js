import React from 'react';
import ToolbarInput from './ToolbarInput';

class ToolbarContent extends React.Component {
	render() {
		const onContentChange = this.props.onContentChange;
		const content = this.props.content;
		const schema = this.props.schema;
		const inputData = {
			name: content.id,
			type: schema.input,
			label: schema.label,
			range: schema.range || '',
			unit: schema.unit || '',
			choices: schema.choices || '',
			source: content.source || '',
			uploadText: content.uploadText || '',
			urlText: content.urlText || '',
			value: content.value
		}

		return (
			<div>
				<ToolbarInput
					data={inputData}
					onChange={onContentChange}
				/>
				{this.props.children}
			</div>
		);
	}
};

export default ToolbarContent;