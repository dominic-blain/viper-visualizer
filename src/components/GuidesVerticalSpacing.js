import React from 'react';

class GuidesVerticalSpacing extends React.Component {
	render() {
		const tokens = this.props.tokens;
		var guides = [];

		tokens.map((tokenName, index) => {
			const computedClass = 'guide '+ tokenName;
			guides.push(
				<div key={index} className={computedClass}>
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
