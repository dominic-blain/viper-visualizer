import React from 'react';
import GuidesWidth from './GuidesWidth';
import GuidesGutter from './GuidesGutter';
import GuidesVerticalSpacing from './GuidesVerticalSpacing';

class Guides extends React.Component {
	render() {
		const options = this.props.options;
		const optionGroups = this.props.optionGroups;
		var widthOptions = optionGroups.widths.options;
		var gutterOptions = optionGroups.gutters.options;
		var verticalSpacingOptions = optionGroups.verticalSpacings.options;
		// Basic state of the switch
		const showGuides = this.props.showGuides;
		// Keyboard shortcut
		const toggleGuides = this.props.shortcuts.toggleGuides;
		// Actual display or not based on previous states
		const displayGuides = (toggleGuides.hot) ? (!showGuides) : showGuides; 

		var visibleClass = (displayGuides) ? 'is-visible': '';
		
		return (
			<div id="guides" className={visibleClass}>
				<GuidesWidth options={widthOptions} />
				<GuidesGutter options={gutterOptions} />
				<GuidesVerticalSpacing options={verticalSpacingOptions} />
			</div>
		);
	}
}
export default Guides;
