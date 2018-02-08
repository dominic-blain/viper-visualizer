import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';
import Image from './image';

class ModuleGrid extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const content = this.props.content;
		const items = content.items;
		const itemTypes = {
			Text:Text,
			Image: Image
		}
		var renderItems = [];

		// For each items..
		for (var itemId in items) {
			const item = items[itemId];
			const ItemComponent = itemTypes[item.type];

			// Add corresponding component to list
			renderItems.push(
				<div className="grid-item">
					<ItemComponent
						content={item.content}
					/>
				</div>
			);
		}

		var computedModuleClass = computeModuleClass('module-grid', module.options, options);

		return (
			<section className={computedModuleClass}>
				<div>
					<div className="grid">
						{renderItems}
					</div>
				</div>
			</section>
		);
	}
}
export default ModuleGrid;
