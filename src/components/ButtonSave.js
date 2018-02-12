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
		var compClass = 'button button-save ' + this.props.saveState;
		return (
			<button className={compClass} onClick={this.handleClick}>
				<div>Save project</div>
				<div className="message message-error"><span>An error occured</span></div>
				<div className="message message-success"><span>Saved!</span></div>
			</button>
		);
	}
};

export default ButtonSave;
