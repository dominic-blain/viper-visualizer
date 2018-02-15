import React from 'react';

class GuidesWidth extends React.Component {
	render() {
		const tokens = this.props.tokens;
		var guides = [];

		tokens.map((tokenName, index) => {
			const computedClass = 'guide '+ tokenName;
			const computedStyle = { transitionDelay: (index -1) * 45+'ms' };
			const computedLabelStyle = { top: (index -1) * 18+'px' };
			guides.push(
				<div className={computedClass} style={computedStyle}>
					<label style={computedLabelStyle}>{tokenName}</label>
				</div>
			);
		});
		
		return (
			<div className="guides-width">
				<div className="guides-ctn">
					{guides}
				</div>
			</div>
		);
	}
}
export default GuidesWidth;
