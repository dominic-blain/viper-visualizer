import React from 'react';
import ToolbarInputRange from './ToolbarInputRange';
import ToolbarInputFont from './ToolbarInputFont';
import ToolbarInputDropdown from './ToolbarInputDropdown';
import ToolbarInputLine from './ToolbarInputLine';
import ToolbarInputTextarea from './ToolbarInputTextarea';
import ToolbarInputImage from './ToolbarInputImage';

class ToolbarInput extends React.Component {
	render() {
		const inputTypes = {
			range: ToolbarInputRange,
			font: ToolbarInputFont,
			dropdown: ToolbarInputDropdown,
			line: ToolbarInputLine,
			textarea: ToolbarInputTextarea,
			image: ToolbarInputImage
		}
		const data = this.props.data;
		const onChange = this.props.onChange;
		const onChangeData = this.props.onChangeData;
		const InputComponent = inputTypes[data.type];

		return (
			<InputComponent
				data={data}
				onChangeData={onChangeData}
				onChange={onChange}
			/>
		);
	}
};

export default ToolbarInput;