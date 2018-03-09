import React from 'react';

class ToolbarAccordionContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inited: false
		};
	}

	componentDidMount() {
		this.setState({inited: true});
		const initialHeight = this.div.offsetHeight;
		this.div.style.height = initialHeight+'px';
	}

	render() {
		const computedClass = 'toolbar-accordion-content' + (this.state.inited ? ' is-inited' : '');

		return (
			<div className={computedClass} ref={div => this.div = div}>
				<div className="content-wrapper">
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default ToolbarAccordionContent;
