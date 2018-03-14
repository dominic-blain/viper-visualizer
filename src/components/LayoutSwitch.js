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
		const layoutName = layouts[activeLayout].title;

		return (
			<div className="layout-switch">
				<h2>Layout</h2>
				<div className="switch-ctn">
					<button 
						className="switch-button switch-prev" 
						onClick={() => this.handleClick(-1)}>
						←
					</button>
					<h3>{layoutName}</h3>
					<button 
						className="switch-button switch-next"
						onClick={() => this.handleClick(1)}>
						→
					</button>
				</div>
				<div className="pagination">
					{activeLayout + 1} / {layouts.length}
				</div>
			</div>
		);
	}
}
export default LayoutSwitch;
