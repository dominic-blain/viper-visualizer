import React from 'react';

class ToolbarModule extends React.Component {
	render() {
		var compClass = this.props.activeClass + ' toolbar-module';

		return (
			<section className={compClass}>
				<h2 className="toolbar-module-title">
					{this.props.title}
				</h2>
				<div className="options-ctn">
					{this.props.children}
				</div>
			</section>
		);
	}
}
export default ToolbarModule;
