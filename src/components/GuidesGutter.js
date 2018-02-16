import React from 'react';

class GuidesGutter extends React.Component {
	render() {
		const tokens = this.props.tokens;
		var guides = [];

		tokens.map((tokenName, index) => {
			var computedClass = 'guide '+ tokenName;
			guides.push(
				<div key={index} className={computedClass}>
					<div className="gutter gutter-left" />
					<div className="gutter gutter-right" />
				</div>
			);
		});
		
		return (
			<div className="guides-gutter">
				<div className="guides-ctn">
					{guides}
				</div>
			</div>
		);
	}
}
export default GuidesGutter;
