import React from 'react';

class ButtonSave extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.handleClick();
	}

	render() {

		return (
			<button class="button button-save">
				Save project
			</button>
		);
	}
};

export default ButtonSave;
