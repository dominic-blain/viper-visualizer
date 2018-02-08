import React from 'react';

class GuidesVerticalSpacing extends React.Component {
	render() {
		const options = this.props.options;
		var guides = [];

		options.map(optionName => {
			var computedClass = 'guide '+ optionName;
			guides.push(
				<div className={computedClass}>
					<div className="vertical-spacing vertical-spacing-top" />
					<div className="vertical-spacing vertical-spacing-bottom" />
				</div>
			);
		});
		
		return (
			<div className="guides-vertical-spacing">
				<div className="guides-ctn">
					{guides}
				</div>
			</div>
		);
	}
}
export default GuidesVerticalSpacing;
