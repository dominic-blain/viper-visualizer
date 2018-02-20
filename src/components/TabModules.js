import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarTabList from './ToolbarTabList';
import ToolbarListButton from './ToolbarListButton';
import ToolbarModule from './ToolbarModule';
import ToolbarGroup from './ToolbarGroup';
import ToolbarItem from './ToolbarItem';
import ToolbarContent from './ToolbarContent';
import ToolbarOption from './ToolbarOption';
import { renderOptionsFrom } from '../utils.js';


class TabModules extends React.Component {
	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const modulesOrder = this.props.modulesOrder;
		const modulesSchema = this.props.modulesSchema;
		const modules = this.props.modules;
		const itemsSchema = this.props.itemsSchema;
		const items = this.props.items;
		const contents = this.props.contents;
		const options = this.props.options;
		const activeTabItem = this.props.activeTabItem;

		const onOptionChange = this.props.onOptionChange;
		const onContentChange = this.props.onContentChange;
		const onModulesReorder = this.props.onModulesReorder;
		const onTabListButtonClick = this.props.onTabListButtonClick;

		var modulesComponents = [];
		var modulesButtonsComponents = [];

		// For each module...
		modulesOrder.map(moduleId => {
			const module = modules[moduleId];
			const schema = modulesSchema[module.type];
			var itemsComponents = [];

			// Get options to render
			var optionsComponents = renderOptionsFrom(
				schema,
				module, 
				options,
				onOptionChange,
				moduleId,
				'module'
			);

			// For each item...
			module.items.map(itemId => {
				const item = items[itemId];
				const itemSchema = itemsSchema[item.type];
				var contentsComponents = [];

				// Get item options to render
				var itemOptionsComponents = renderOptionsFrom(
					schema.items, 
					item, 
					options,
					onOptionChange,
					item.id,
					'item'
				);

				// For each content in item
				item.content.map(contentId => {
					const content = contents[contentId];
					const contentSchema = itemSchema.content[content.name];

					// Get content options to render
					var contentOptionsComponents = renderOptionsFrom(
						contentSchema, 
						content, 
						options,
						onOptionChange,
						item.id,
						'content'
					);

					// Add this content to components list
					contentsComponents.push(
						<ToolbarContent
							key={contentId}
							schema={contentSchema}
							content={content}
							onContentChange={onContentChange}>
							{contentOptionsComponents}
						</ToolbarContent>
					);
				});

				// Add this item to components list
				itemsComponents.push(
					<ToolbarItem
						key={itemId}
						data={item}>
						{contentsComponents}
					</ToolbarItem>
				);
			});

			var tabItemActiveClass = (activeTabItem == moduleId) ? 'is-active' : '';

			// Add this module to components list
			modulesComponents.push( 
				<ToolbarModule
					key={moduleId}
					title={module.title}
					activeClass={tabItemActiveClass}>
					<ToolbarGroup
						label="Content">
						{itemsComponents}
					</ToolbarGroup>
					<ToolbarGroup
						label="Options">
						{optionsComponents}
					</ToolbarGroup>
				</ToolbarModule>
			);

			// Add a button corresponding to this module in components list
			modulesButtonsComponents.push({
				title: module.title,
				id: moduleId
			});
		});

		return (
			<ToolbarTabContent
				name="modules"
				activeClass={tabActiveClass}>
				<ToolbarTabList 
					listId="TabModulesList"
					onReorder={onModulesReorder}
					onButtonClick={onTabListButtonClick}
					items={modulesButtonsComponents}>
					{modulesComponents}
				</ToolbarTabList>
			</ToolbarTabContent>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onOptionChange: (name, value, data) => dispatch(ActionCreators.updateOption(name, value, data)),
	onContentChange: (id, value, data) => dispatch(ActionCreators.updateContent(id, value, data)),
	onModulesReorder: (newOrder) => dispatch(ActionCreators.setModulesOrder(newOrder)),
	onTabListButtonClick: (itemName) => dispatch(ActionCreators.changeTabItem(itemName))
});

const mapStateToProps = (state) => ({
	activeTabItem: state.activeTabItem,
	modulesOrder: state.modulesOrder,
	modulesSchema: state.modulesSchema,
	modules: state.modules,
	itemsSchema: state.itemsSchema,
	items: state.items,
	contents: state.contents,
	options: state.options
});

export default connect(mapStateToProps, mapDispatchToProps)(TabModules);
