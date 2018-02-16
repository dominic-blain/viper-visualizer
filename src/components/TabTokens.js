import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarGroup from './ToolbarGroup';
import ToolbarToken from './ToolbarToken';
import { renderOptionsFrom } from '../utils.js';


class TabTokens extends React.Component {
	render() {
		const tabActiveClass = this.props.isActive ? 'is-active' : '';
		const tokensGroups = this.props.tokensGroups;
		const tokens = this.props.tokens;
		const fonts = this.props.fonts;

		const onTokenChange = this.props.onTokenChange;
		const onFontTokenChange = this.props.onFontTokenChange;

		var groupsComponents = [];

		// For each group...
		for (var groupName in tokensGroups) {
			const group = tokensGroups[groupName];
			var tokensComponents = [];

			// For each token in group
			group.tokens.map(tokenName => {
				const token = tokens[tokenName];

				// Add this token to components list
				tokensComponents.push(
					<ToolbarToken
						key={tokenName}
						name={tokenName}
						data={token}
						fonts={fonts}
						value={token.value}
						onTokenChange={onTokenChange}
						onFontTokenChange={onFontTokenChange}
					/>
				);
			});
			// Add this group to groups component list
			groupsComponents.push(
				<ToolbarGroup
					key={groupName}
					label={group.label}>
					{tokensComponents}
				</ToolbarGroup>
			);
		}

		return (
			<ToolbarTabContent
				name="tokens"
				activeClass={tabActiveClass}>
				{groupsComponents}
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
	tokensGroups: state.tokensGroups,
	tokens: state.tokens,
	fonts: state.fonts
});

export default connect(mapStateToProps, mapDispatchToProps)(TabTokens);
