import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarTabList from './ToolbarTabList';
import ToolbarAccordion from './ToolbarAccordion';
import ToolbarModule from './ToolbarModule';
import ToolbarGroup from './ToolbarGroup';
import ToolbarItem from './ToolbarItem';
import ToolbarContent from './ToolbarContent';
import ToolbarOption from './ToolbarOption';
import ButtonAddModule from './ButtonAddModule';
import ButtonAddItem from './ButtonAddItem';
import { renderOptionsFrom } from '../utils.js';


class TabModules extends React.Component {
	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const activeLayout = this.props.activeLayout;
		const layouts = this.props.layouts;
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
		const onModuleAdd = this.props.onModuleAdd;
		const onModuleDelete = this.props.onModuleDelete;
		const onModuleTitleChange = this.props.onModuleTitleChange;
		const onItemAdd = this.props.onItemAdd;
		const onItemDelete = this.props.onItemDelete;
		const onItemsReorder = this.props.onItemsReorder;
		const onTabListButtonClick = this.props.onTabListButtonClick;

		var modulesComponents = [];
		var modulesList = [];
		var extraOptions;

		// For each module...
		layouts[activeLayout].modules.map(moduleId => {
			const module = modules[moduleId];
			const schema = modulesSchema[module.type];
			var itemsComponents = [];
			var itemsAccordion = [];

			// Get options to render
			const optionsComponents = renderOptionsFrom(
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

				// Add item to accordion
				itemsAccordion.push({
					title: item.title,
					id: itemId
				});

				// Get item options to render
				const itemOptionsComponents = renderOptionsFrom(
					schema.items, 
					item, 
					options,
					onOptionChange,
					item.id,
					'item'
				);

				if (schema.items.options) {
					extraOptions = {
						options: schema.items.options,
						defaults: schema.items.optionsDefaults
					}
				}

				// For each content in item
				item.content.map(contentId => {
					const content = contents[contentId];
					const contentSchema = itemSchema.content[content.type];

					// Get content options to render
					const contentOptionsComponents = renderOptionsFrom(
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
						data={item}
						options={itemOptionsComponents}>
						{contentsComponents}
					</ToolbarItem>
				);
			});

			var tabItemActiveClass = (activeTabItem == moduleId) ? 'is-active' : '';
			var itemsList = [];

			// If our module have repeatable items
			if (schema.items.repeatable) {
				// Create an accordion with items
				itemsList.push(
					<div className="item-list">
						<ToolbarAccordion
							key={moduleId}
							listId={moduleId}
							items={itemsAccordion}
							components={itemsComponents}
							onReorder={onItemsReorder}
							onDelete={onItemDelete}
						/>
						<ButtonAddItem 
							moduleId={moduleId}
							extraOptions={extraOptions}
							schema={itemsSchema}
							onChange={onItemAdd}
						/>
					</div>
				)
			}
			else {
				itemsList = itemsComponents;
			}

			// Add this module to components list
			modulesComponents.push( 
				<ToolbarModule
					key={moduleId}
					id={moduleId}
					title={module.title}
					onChange={onModuleTitleChange}
					activeClass={tabItemActiveClass}>
					<ToolbarGroup
						label="Content">
						{itemsList}
					</ToolbarGroup>
					<ToolbarGroup
						label="Options">
						{optionsComponents}
					</ToolbarGroup>
				</ToolbarModule>
			);

			// Add a button corresponding to this module in components list
			modulesList.push({
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
					onDelete={onModuleDelete}
					onButtonClick={onTabListButtonClick}
					items={modulesList}>
					{modulesComponents}
				</ToolbarTabList>
				<ButtonAddModule 
					schema={modulesSchema}
					onChange={onModuleAdd}
				/>
			</ToolbarTabContent>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onOptionChange: (name, value, data) => dispatch(ActionCreators.updateOption(name, value, data)),
	onContentChange: (id, value, data) => dispatch(ActionCreators.updateContent(id, value, data)),
	onModulesReorder: (newOrder) => dispatch(ActionCreators.setModulesOrder(newOrder)),
	onModuleAdd: (type) => dispatch(ActionCreators.createModule(type)),
	onModuleDelete: (id) => dispatch(ActionCreators.deleteModule(id)),
	onModuleTitleChange: (id, title) => dispatch(ActionCreators.updateModuleTitle(id, title)),
	onItemAdd: (type, moduleId, extraOptions) => dispatch(ActionCreators.createItem(type, moduleId, extraOptions)),
	onItemDelete: (id, moduleId) => dispatch(ActionCreators.deleteItem(id, moduleId)),
	onItemsReorder: (moduleId, newOrder) => dispatch(ActionCreators.setItemsOrder(moduleId, newOrder)),
	onTabListButtonClick: (itemName) => dispatch(ActionCreators.changeTabItem(itemName))
});

const mapStateToProps = (state) => ({
	activeTabItem: state.activeTabItem,
	layouts: state.layouts,
	activeLayout: state.activeLayout,
	modulesSchema: state.modulesSchema,
	modules: state.modules,
	itemsSchema: state.itemsSchema,
	items: state.items,
	contents: state.contents,
	options: state.options
});

export default connect(mapStateToProps, mapDispatchToProps)(TabModules);
