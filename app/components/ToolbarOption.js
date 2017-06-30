import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';

class ToolbarOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.props.onOptionChange(event.target.value, this.props.optionName);
	}

	render() {
		return (
			<label data-key={this.props.key} >
				{this.props.label}
				<div>
				</div>
			</label>
		);
		// return (
		// 	<label>
		// 		{this.props.label}
		// 		<div>
		// 			<input type="range" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} />
		// 			<input type="number" min={this.props.range.min} max={this.props.range.max} value={this.props.value} onChange={this.handleOptionChange} />
		// 		</div>
		// 	</label>
		// );
	}
};

const mapDispacthToProps = (dispatch) => ({
	onOptionChange: (value, optionName) => dispatch(ActionCreators.updateOption(value, optionName))
});

export default connect(null, mapDispacthToProps)(ToolbarOption);
