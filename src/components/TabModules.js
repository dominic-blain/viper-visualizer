import React from 'react';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarTabList from './ToolbarTabList';
import ToolbarModule from './ToolbarModule';
import ToolbarInput from './ToolbarInput';


class TabModules extends React.Component {
	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const modules = this.props.modules;
		const moduleList = this.props.moduleList;
		const moduleOptions = this.props.moduleOptions;
		const items = this.props.items;
		const itemList = this.props.itemList;

		var moduleListButtonsComponents = [];
		var moduleListItemsComponents = [];

		// For each module...
		for (var moduleId in moduleList) {
			const module = moduleList[moduleId];
			var optionsComponents = [];
			var itemsComponents = [];

			// For each options...
			modules[module.type].options.map(optionName => {
				const optionObject = moduleOptions[optionName];
				const optionValue = module.options[optionName];
				// Add this option to options components list
				optionsComponents.push(
					<ToolbarInput
						key={optionName}
						data={optionObject}
						value={optionValue}
						name={optionName}
						moduleId={moduleId}
						onOptionChange={this.props.onModuleOptionChange}
					/>
				);
			});
			
			// For each items...
			const moduleItems = modules[module.type].items;
			for (var itemId in moduleItems) {
				const item = itemList[itemId];
				const itemObject = item[itemId];
				var itemOptionsComponents = [];
				var itemContentsComponents = [];

				// For each content in item
				for (var itemContentName in itemObject.content ) {
					const itemContent = item.content[itemContentName];
					const itemContentObject = itemObject.content[itemContentName];
					const itemContentValue = itemContent.value;
					var contentOptionsComponents = [];

					// For each option in content...
					itemContent.options.map(contentOptionName => {
						const contentOptionObject = moduleOptions[optionName];
						const contentOptionValue = item.options[optionName];
						// Add this option to options components list
						optionsComponents.push(
							<ToolbarInput
								key={itemContentName}
								data={itemContentObject}
								value={itemContentValue}
								name={itemContentName}
								moduleId={moduleId}
								onOptionChange={this.props.onModuleOptionChange}
							/>
						);
					});
					// Add this content to content components list 
					itemContentsComponents.push(
						<ToolbarInput
							key={itemContentName}
							data={itemContentObject}
							value={itemContentValue}
							name={itemContentName}
							moduleId={moduleId}
							onOptionChange={this.props.onModuleOptionChange}
						/>
					);
				}

				// For each item options in module...
				modules[module.type].itemOptions.map(itemOptionName => {
					const itemOptionObject = moduleOptions[itemOptionName];
					const itemOptionValue = module.itemOptions[itemOptionName];
					// Add this item option to item options components list
					itemOptionsComponents.push(
						<ToolbarInput
							key={itemOptionName}
							data={itemOptionObject}
							value={itemOptionValue}
							name={itemOptionName}
							moduleId={moduleId}
							onOptionChange={this.props.onModuleOptionChange}
						/>
					);
				});

				// Add this content to content components list
				itemsComponents.push(
					<ToolbarInput
						key={itemId}
						data={itemObject}
						value={itemValue}
						name={itemName}
						moduleId={moduleId}
						onOptionChange={this.props.onModuleContentChange}
					/>
				);
			};

			var tabItemActiveClass = (activeTabItem == moduleId) ? 'is-active' : '';

			// Add this module to modules items components list
			moduleListItemsComponents.push(
				<ToolbarModule
					key={moduleId}
					title={module.title}
					activeClass={tabItemActiveClass}>
					<ToolbarGroup
						label="Content">
						{contentComponents}
					</ToolbarGroup>
					<ToolbarGroup
						label="Options">
						{optionsComponents}
					</ToolbarGroup>
				</ToolbarModule>
			);

			moduleListButtonsComponents.push(
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
				activeClass={tabActiveClass.modules}>
				<ToolbarTabList items={moduleListItemsComponents}>
					{moduleListButtonsComponents}
				</ToolbarTabList>
			</ToolbarTabContent>
		);
	}
}

export default TabModules;
