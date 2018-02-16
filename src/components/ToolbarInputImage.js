import React from 'react';

class ToolbarInputImage extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const onChangeData = this.props.onChangeData;
		this.props.onChange(event.target.name, event.target.value, onChangeData);
	}

	render() {
		const data = this.props.data;
		return (
			<div>TODO</div>
		);
	}
}

export default ToolbarInputImage;
