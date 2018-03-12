import React from 'react';
import ClickNHold from 'react-click-n-hold';

class ButtonDeleteModule extends React.Component {
	constructor(props) {
		super(props);
		this.handlePressStart = this.handlePressStart.bind(this);
		this.handlePressEnd = this.handlePressEnd.bind(this);
		this.handlePressComplete = this.handlePressComplete.bind(this);
	}

	handlePressStart() {
		console.log('press started');
	}

	handlePressEnd() {
		console.log('press ended');
	}

	handlePressComplete() {
		console.log('press complete');
	}

	render() {

		return (
			<ClickNHold
				time={1.6}
				onStart={this.handlePressStart}
				onEnd={this.handlePressEnd}
				onClickNHold={this.handlePressComplete}
				className="button-delete-module">
				<button>X</button>
			</ClickNHold>
		);
	}
}
export default ButtonDeleteModule;
