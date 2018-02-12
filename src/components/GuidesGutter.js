import React from 'react';

class GuidesGutter extends React.Component {
	render() {
		const options = this.props.options;
		var guides = [];

		options.map(optionName => {
			var computedClass = 'guide '+ optionName;
			guides.push(
				<div className={computedClass}>
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
