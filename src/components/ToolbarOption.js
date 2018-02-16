import React from 'react';
import ToolbarInput from './ToolbarInput';
import { findTypeFrom } from '../utils';

class ToolbarOption extends React.Component {
	render() {
		const onOptionChange = this.props.onOptionChange;
		const value = this.props.value;
		const id = this.props.belongsTo;
		const option = this.props.option;
		const inputData = {
			name: option.name,
			type: option.type,
			label: option.label,
			range: option.range || '',
			unit: option.unit || '',
			choices: option.choices || '',
			value: value,
		}
		const onOptionChangeData = {
			id: id,
			type: findTypeFrom(id)
		}

		return (
			<div>
				<ToolbarInput
					data={inputData}
					onChangeData={onOptionChangeData}
					onChange={onOptionChange}
				/>
			</div>
		);
	}
};

export default ToolbarOption;