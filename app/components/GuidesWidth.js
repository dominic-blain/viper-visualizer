import React from 'react';

class GuidesWidth extends React.Component {
	render() {
		const options = this.props.options;
		var guides = [];

		options.map((optionName, index) => {
			const computedClass = 'guide '+ optionName;
			const computedStyle = { transitionDelay: (index -1) * 45+'ms' };
			const computedLabelStyle = { top: (index -1) * 18+'px' };
			guides.push(
				<div className={computedClass} style={computedStyle}>
					<label style={computedLabelStyle}>{optionName}</label>
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
