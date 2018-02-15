import React from 'react';
import GuidesWidth from './GuidesWidth';
import GuidesGutter from './GuidesGutter';
import GuidesVerticalSpacing from './GuidesVerticalSpacing';

class Guides extends React.Component {
	render() {
		const tokens = this.props.tokens;
		const tokensGroups = this.props.tokensGroups;
		var widthTokens = tokensGroups.widths.tokens;
		var gutterTokens = tokensGroups.gutters.tokens;
		var verticalSpacingTokens = tokensGroups.verticalSpacings.tokens;
		// Basic state of the switch
		const showGuides = this.props.showGuides;
		// Keyboard shortcut
		const toggleGuides = this.props.shortcuts.toggleGuides;
		// Actual display or not based on previous states
		const displayGuides = (toggleGuides.hot) ? (!showGuides) : showGuides; 

		var visibleClass = (displayGuides) ? 'is-visible': '';
		
		return (
			<div id="guides" className={visibleClass}>
				<GuidesWidth tokens={widthTokens} />
				<GuidesGutter tokens={gutterTokens} />
				<GuidesVerticalSpacing tokens={verticalSpacingTokens} />
			</div>
		);
	}
}
export default Guides;
