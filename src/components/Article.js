import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import CustomProperties from 'react-custom-properties';
import Guides from './Guides';
import GuidesSwitch from './GuidesSwitch';
import ModuleMarkdown from './ModuleMarkdown';
import ModuleImage from './ModuleImage';
import ModuleGrid from './ModuleGrid';
import ItemMarkdown from './ItemMarkdown';
import ItemText from './ItemText';
import ItemImage from './ItemImage';
import LayoutSwitch from './LayoutSwitch';


class Article extends React.Component {
	render() {
		const showGuides = this.props.showGuides;
		const shortcuts = this.props.shortcuts;
		const tokens = this.props.tokens;
		const tokensGroups = this.props.tokensGroups;
		const activeLayout = this.props.activeLayout;
		const layouts = this.props.layouts;
		const modulesSchema = this.props.modulesSchema;
		const modules = this.props.modules;
		const modulesTypes = {
			ModuleMarkdown: ModuleMarkdown,
			ModuleImage: ModuleImage,
			ModuleGrid: ModuleGrid
		};
		const itemsSchema = this.props.itemsSchema;
		const items = this.props.items;
		const itemsTypes = {
			ItemMarkdown: ItemMarkdown,
			ItemText: ItemText,
			ItemImage: ItemImage,
		};
		const contents = this.props.contents;
		var renderModules = [];
		var CSSVariables = {};

		// For each module...
		layouts[activeLayout].modules.map(moduleId => {
			const module = modules[moduleId];
			const schema = modulesSchema[module.type];
			const ModuleComponent = modulesTypes[module.type];
			const itemsComponents = [];

			module.items.map(itemId => {
				const item = items[itemId];
				const itemSchema = itemsSchema[item.type];
				const ItemComponent = itemsTypes[item.type];

				// Add this item to components list
				itemsComponents.push(
					<ItemComponent
						key={itemId}
						schema={itemSchema}
						item={item}
						contents={contents}
					/>
				);
			});

			// Add corresponding component to list
			renderModules.push( 
				<ModuleComponent
					key={moduleId}
					schema={schema}
					module={module}
					items={itemsComponents}
				/>
			);
		});

		// For each tokens...
		for (var tokenName in tokens) {
			const token = tokens[tokenName];
			const variableName = '--' + tokenName;
			const variableUnit = token.unit || '';
			const variableValue = token.value + variableUnit;
			// Assign corresponding CSS variables
			CSSVariables[variableName] = variableValue;
		}

		return (
			<CustomProperties properties={CSSVariables}>
				<article id="page">
					<LayoutSwitch activeLayout={activeLayout} layouts={layouts} onClick={this.props.onLayoutSwitch} />
					<GuidesSwitch showGuides={showGuides} shortcuts={shortcuts} onClick={this.props.onShowGuidesClick} />
					<Guides tokens={tokens} tokensGroups={tokensGroups} shortcuts={shortcuts} showGuides={showGuides} />
					{renderModules}
				</article>
			</CustomProperties>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	onShowGuidesClick: userAction => dispatch(ActionCreators.toggleGuides(userAction)),
	onLayoutSwitch: index => dispatch(ActionCreators.switchLayout(index))
});

const mapStateToProps = (state) => ({
	tokensGroups: state.tokensGroups,
	tokens: state.tokens,
	activeLayout: state.activeLayout,
	layouts: state.layouts,
	modulesSchema: state.modulesSchema,
	modules: state.modules,
	itemsSchema: state.itemsSchema,
	items: state.items,
	contents: state.contents,
	options: state.options,
	showGuides: state.ui.showGuides,
	shortcuts: state.shortcuts
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
