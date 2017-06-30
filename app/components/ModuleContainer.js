import React from 'react';
import {connect} from 'react-redux';
import Content from './Content';


class ModuleContainer extends React.Component {
	render() {
		var modules = [];
		var options = this.props.options;
		this.props.modules.forEach(function(module, index) {
			modules.push(
				<Content
					key={index}
					element="section"
					options={options}
					properties={module.properties}
					content={module.content}
					attr={module.attr}
				/>
			);
		});

		return (
			<article>
				{modules}
			</article>
		);
	}
};
const mapStateToProps = (state) => (
{
	modules: state.modules,
	options: state.options
});
export default connect(mapStateToProps, null)(ModuleContainer);
