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
		const modulesSchema = this.props.modulesSchema;
		const modules = this.props.modules;
		const itemsSchema = this.props.itemsSchema;
		const items = this.props.items;
		const contents = this.props.contents;
		const options = this.props.options;
		const activeTabItem = this.props.activeTabItem;

		const onOptionChange = this.props.onOptionChange;
		const onContentChange = this.props.onContentChange;

		var modulesComponents = [];
		var modulesButtonsComponents = [];

		// For each module...
		for (var moduleId in modules) {
			const module = modules[moduleId];
			const schema = modulesSchema[module.type];
			var itemsComponents = [];

			// Get options to render
			var optionsComponents = renderOptionsFrom(
				schema,
				module, 
				options,
				onOptionChange,
				module.id,
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
							id={contentId}
							data={contentSchema}
							value={content.value}
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
			modulesButtonsComponents.push(
				<ToolbarListButton
					key={moduleId}
					id={moduleId}
					title={module.title}
					onClick={this.props.onTabListButtonClick}>
				</ToolbarListButton>
			);
		};

		return (
			<ToolbarTabContent
				name="modules"
				activeClass={tabActiveClass}>
				<ToolbarTabList items={modulesComponents}>
					{modulesButtonsComponents}
				</ToolbarTabList>
			</ToolbarTabContent>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onOptionChange: (name, value, data) => dispatch(ActionCreators.updateOption(name, value, data)),
	onContentChange: (id, value) => dispatch(ActionCreators.updateContent(id, value)),
	onTabListButtonClick: (itemName) => dispatch(ActionCreators.changeTabItem(itemName))
});

const mapStateToProps = (state) => ({
	activeTabItem: state.activeTabItem,
	tokensGroups: state.tokensGroups,
	tokens: state.tokens,
	modulesSchema: state.modulesSchema,
	modules: state.modules,
	itemsSchema: state.itemsSchema,
	items: state.items,
	contents: state.contents,
	options: state.options
});

export default connect(mapStateToProps, mapDispatchToProps)(TabModules);
