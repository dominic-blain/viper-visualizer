import React from 'react';
import ReactMarkdown from 'react-markdown';
import { computeModuleClass } from '../utils';
import ItemMarkdown from './ItemMarkdown';
import ItemText from './ItemText';
import ItemImage from './ItemImage';

class ModuleGrid extends React.Component {
	render() {
		const module = this.props.module;
		const options = this.props.options;
		const items = this.props.items;
		const itemTypes = {
			ItemMarkdown:ItemMarkdown,
			ItemText:ItemText,
			ItemImage:ItemImage,
		}
		var renderItems = [];

		// For each items...
		items.map(item => {
			const ItemComponent = itemTypes[item.type];
			// Add corresponding component to list
			renderItems.push(
				<div className="grid-item">
					<ItemComponent
						content={item.content}
					/>
				</div>
			);
		});

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
