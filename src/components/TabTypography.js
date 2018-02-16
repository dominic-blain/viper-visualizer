import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarGroup from './ToolbarGroup';
import ToolbarToken from './ToolbarToken';
import { renderOptionsFrom } from '../utils.js';


class TabTypography extends React.Component {
	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const fontsRecipes = this.props.fontsRecipes;
		const tokens = this.props.tokens;
		const fonts = this.props.fonts;

		const onTokenChange = this.props.onTokenChange;
		const onFontTokenChange = this.props.onFontTokenChange;

		var recipesComponents = [];

		// For each recipes...
		for (var recipeName in fontsRecipes) {
			const recipe = fontsRecipes[recipeName];
			const fontToken = tokens[recipe.font];
			const sizeToken = tokens[recipe.size];

			// Add this recipe to components list
			recipesComponents.push(
				<ToolbarGroup
					key={recipeName}
					label={recipe.label}>
					<ToolbarToken
						key={fontToken.name}
						name={fontToken.name}
						data={fontToken}
						fonts={fonts}
						value={fontToken.value}
						onTokenChange={onTokenChange}
						onFontTokenChange={onFontTokenChange}
					/>
					<ToolbarToken
						key={sizeToken.name}
						name={sizeToken.name}
						data={sizeToken}
						fonts={fonts}
						value={sizeToken.value}
						onTokenChange={onTokenChange}
						onFontTokenChange={onFontTokenChange}
					/>
				</ToolbarGroup>
			);
		}

		return (
			<ToolbarTabContent
				name="typography"
				activeClass={tabActiveClass}>
				{recipesComponents}
			</ToolbarTabContent>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onTokenChange: (name, value, data) => dispatch(ActionCreators.updateToken(name, value, data)),
	onFontTokenChange: (name, token, file) => dispatch(ActionCreators.updateFontToken(name, token, file))
});

const mapStateToProps = (state) => ({
	activeTabItem: state.activeTabItem,
	fontsRecipes: state.fontsRecipes,
	tokens: state.tokens,
	fonts: state.fonts
});

export default connect(mapStateToProps, mapDispatchToProps)(TabTypography);
