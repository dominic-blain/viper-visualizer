import React from 'react';

class GuidesSwitch extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onClick(true);
	}

	render() {
		// Basic state of the switch
		const showGuides = this.props.showGuides;
		// Keyboard shortcut
		const toggleGuides = this.props.shortcuts.toggleGuides;
		// Actual display or not based on previous states
		const displayGuides = (toggleGuides.hot) ? (!showGuides) : showGuides; 
		var stateClass = (displayGuides) ? 'is-on' : 'is-off';

		return (
			<div id="guidesSwitch" className={stateClass} onClick={this.props.onClick}>
				<div className="toggle" />
				<label>Guides</label>
			</div>
		);
	}
}
export default GuidesSwitch;
