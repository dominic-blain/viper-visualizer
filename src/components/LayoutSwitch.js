import React from 'react';

class LayoutSwitch extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}


	handleClick(direction) {
		const length = this.props.layouts.length;
		var index = this.props.activeLayout + direction;
		if (index < 0) {
			index = length - 1;
		}
		else if (index > (length - 1)) {
			index = 0;
		}
		this.props.onClick(index);
	}

	render() {
		const layouts = this.props.layouts;
		const activeLayout = this.props.activeLayout;

		var titlesComponents = [];

		layouts.map((layout, index) => {
			const computedClass = 'layout-title ' + (index == activeLayout ? 'is-active' : '');
			const refName = 'title' + index;
			titlesComponents.push(
				<h3 key={index} className={computedClass}>
					{layout.title}
				</h3>
			);
		});

		return (
			<div className="layout-switch">
				<h2>Layout</h2>
				<div className="title-ctn">
					{titlesComponents}
				</div>
				<div className="pagination">
					<button 
						className="switch-button switch-prev" 
						onClick={() => this.handleClick(-1)}>
						←
					</button>
					{activeLayout + 1} / {layouts.length}
					<button 
						className="switch-button switch-next"
						onClick={() => this.handleClick(1)}>
						→
					</button>
				</div>
			</div>
		);
	}
}
export default LayoutSwitch;
