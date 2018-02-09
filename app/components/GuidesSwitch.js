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
		const showGuides = this.props.showGuides;
		var stateClass = (showGuides) ? 'is-on': 'is-off';

		return (
			<div id="guidesSwitch" className={stateClass} onClick={this.props.onClick}>
				<div className="toggle" />
				<label>Guides</label>
			</div>
		);
	}
}
export default GuidesSwitch;
