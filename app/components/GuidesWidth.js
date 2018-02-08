import React from 'react';

class GuidesWidth extends React.Component {
	render() {
		const options = this.props.options;
		var guides = [];

		options.map((optionName, index) => {
			const computedClass = 'guide '+ optionName;
			const computedStyle = {top: (index -1) * 18+'px'};
			guides.push(
				<div className={computedClass}>
					<label style={computedStyle}>{optionName}</label>
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
