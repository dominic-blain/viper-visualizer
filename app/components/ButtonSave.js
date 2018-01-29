import React from 'react';

class ButtonSave extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick();
	}

	render() {

		return (
			<button className="button button-save test" onClick={this.handleClick} >
				Save project
			</button>
		);
	}
};

export default ButtonSave;
