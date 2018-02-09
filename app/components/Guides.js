import React from 'react';
import GuidesWidth from './GuidesWidth';
import GuidesGutter from './GuidesGutter';
import GuidesVerticalSpacing from './GuidesVerticalSpacing';

class Guides extends React.Component {
	render() {
		const showGuides = this.props.showGuides;
		const options = this.props.options;
		const optionGroups = this.props.optionGroups;
		var widthOptions = optionGroups.widths.options;
		var gutterOptions = optionGroups.gutters.options;
		var verticalSpacingOptions = optionGroups.verticalSpacings.options;

		var visibleClass = (showGuides) ? 'is-visible': '';
		
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
