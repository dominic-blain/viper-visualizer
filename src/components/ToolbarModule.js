import React from 'react';

class ToolbarModule extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const id = this.props.id;
		const title = event.target.value;
		this.props.onChange(id, title);
	}

	render() {
		var compClass = this.props.activeClass + ' toolbar-module';

		return (
			<section className={compClass}>
				<input 
					className="toolbar-module-title"
					value={this.props.title}
					onChange={this.handleChange}
				/>
				{this.props.children}
			</section>
		);
	}
}
export default ToolbarModule;
