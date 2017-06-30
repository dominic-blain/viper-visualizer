import React from 'react';
import {getValueFrom} from '../utils';

class Content extends React.Component {
	render() {
		var element = this.props.element;
		var attr = this.props.attr || {};
		var style = {};
		var options = this.props.options;
		var children = [];

		if (this.props.properties) {
			this.props.properties.forEach(function(property) {
				var value = options[property.syncWith];
				var modifier = property.modifier || 1;
				style[property.name] = value * modifier + "px";
			});
			attr.style = style;
		}

		if(Array.isArray(this.props.content)){
			this.props.content.forEach(function(child, index) {
				console.log(child);
				children.push(
					<Content
						key = {index}
						element={child.element}
						options={options}
						properties={child.properties}
						content={child.content}
						attr={child.attr}
					/>
				);
			});
		}
		else {
			children = null;
		}

		if (this.props.element) {
			return (
				React.createElement(
					element,
					attr,
					children
				)
			);
		}
		else if (this.props.content) {
			return (
				<div {...this.props.attr}>
					{this.props.content}
				</div>
			);
		}
		else {
			return;
		}
	}
}
export default Content;
