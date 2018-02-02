import React from 'react';
import {getState} from 'redux';

class Content extends React.Component {
	render() {
		var element = this.props.element || "div";
		var attr = this.props.attr || {};
		var properties = this.props.properties || [];
		var content = this.props.content || "";
		var options = this.props.options;
		var style = {};
		var children = [];

		// Set inline styling
		if (properties.length) {
			properties.map(property => {
				var unit = property.unit || '';
				var value = options[property.syncWith].value;
				var modifier = property.modifier == null ? 1 : property.modifier;

				if (typeof value === "number") {
					value *= modifier;
				}
				style[property.name] = value + unit;
			});
			attr.style = style;
		}

		// Generate children
		if(Array.isArray(content)) {
			content.map((child, index) => {
				children.push(
					<Content
						key = {index}
						options={options}
						element={child.element}
						properties={child.properties}
						content={child.content}
						attr={child.attr}
					/>
				);
			});
		}
		else if (content){
			children = content;
		}
		else {
			children = null;
		}


		return (
			React.createElement(
				element,
				attr,
				children
			)
		);
	}
}
export default Content;
