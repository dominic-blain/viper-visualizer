import React from 'react';
import ClickNHold from 'react-click-n-hold';

class ButtonDeleteItem extends React.Component {
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
		const id = this.props.id;
		const moduleId = this.props.moduleId;
		this.props.onDelete(id, moduleId);
	}

	render() {

		return (
			<ClickNHold
				time={1}
				onStart={this.handlePressStart}
				onEnd={this.handlePressEnd}
				onClickNHold={this.handlePressComplete}
				className="button-delete-item">
				<button>
					<div className="wrapper">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg"
							style={{
								paddingBottom: '123.333%',
								height: '1px',
								width: '100%',
								overflow: 'visible',
								display:'block'
							}}
							preserveAspectRatio="xMidYMin slice"
							viewBox="0 0 30 37">
							<path fill="currentColor" d="M2 37V7h26v30H2zm24-2V9H4v26h22zm4-33v7H0V2h7.6l2-2h10.8l2 2H30zm-8.4 2l-2-2h-9.2l-2 2H2v3h26V4h-6.4z"/>
							<path fill="currentColor" d="M8 12.5v19h2v-19zM14 12.5v19h2v-19zM20 12.5v19h2v-19z"/>
						</svg>
					</span>
					</div>
				</button>
			</ClickNHold>
		);
	}
}
export default ButtonDeleteItem;
