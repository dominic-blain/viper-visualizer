import React from 'react';

class ToolbarModule extends React.Component {
	render() {


		return (
			<section className="toolbar-module">
				<h2 className="toolbar-module-title">
					{this.props.title}
				</h2>
				{this.props.content}
			</section>
		);
	}
}
export default ToolbarModule;
