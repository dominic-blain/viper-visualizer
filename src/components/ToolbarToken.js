import React from 'react';
import ToolbarInput from './ToolbarInput';

class ToolbarToken extends React.Component {
	shouldComponentUpdate(nextProps) {
		return (
			nextProps.value !== this.props.value ||
			nextProps.data !== this.props.data || (
				nextProps.data.type === 'font' && 
				nextProps.fonts !== this.props.fonts
			)
		);
	}
	render() {
		const tokenChange = this.props.onTokenChange;
		const fontTokenChange = this.props.onFontTokenChange;
		const value = this.props.value;
		const name = this.props.name;
		const data = this.props.data;
		const fonts = this.props.fonts;
		const inputData = {
			name: name,
			type: data.type,
			label: data.label,
			range: data.range || '',
			unit: data.unit || '',
			choices: data.choices || '',
			uploadText: data.uploadText || '',
			googleFontText: data.googleFontText || '',
			source: data.source || '',
			fonts: fonts,
			value: value
		}
		const onTokenChange = data.type == 'font' ? fontTokenChange : tokenChange;
		return (
			<div>
				<ToolbarInput
					data={inputData}
					onChange={onTokenChange}
				/>
				{this.props.children}
			</div>
		);
	}
};

export default ToolbarToken;