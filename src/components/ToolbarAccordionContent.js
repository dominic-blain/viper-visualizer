import React from 'react';

class ToolbarAccordionContent extends React.Component {
	componentDidMount() {
		const initialHeight = this.div.offsetHeight;
		this.div.style.height = initialHeight+'px';
	}

	render() {
		return (
			<div className="toolbar-accordion-content" ref={div => this.div = div}>
				<div className="content-wrapper">
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default ToolbarAccordionContent;
