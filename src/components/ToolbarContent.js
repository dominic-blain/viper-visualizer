import React from 'react';
import ToolbarInput from './ToolbarInput';

class ToolbarContent extends React.Component {
	render() {
		const onContentChange = this.props.onContentChange;
		const value = this.props.value;
		const id = this.props.id;
		const data = this.props.data;
		const inputData = {
			name: id,
			type: data.type,
			label: data.label,
			range: data.range || '',
			unit: data.unit || '',
			choices: data.choices || '',
			value: value
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