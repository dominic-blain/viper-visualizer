import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import ToolbarTabButton from './ToolbarTabButton';
import ToolbarTabContent from './ToolbarTabContent';
import ToolbarTabList from './ToolbarTabList';
import ToolbarListButton from './ToolbarListButton';
import ToolbarGroup from './ToolbarGroup';
import ToolbarInput from './ToolbarInput';
import ToolbarModule from './ToolbarModule';
import TabTokens from './TabTokens';
import TabTypography from './TabTypography';
import TabModules from './TabModules';
import ButtonSave from './ButtonSave';

class Toolbar extends React.Component {
	render() {
		const activeTab = {
			tokens: this.props.activeTab == "tokens",
			typography: this.props.activeTab == "typography",
			modules: this.props.activeTab == "modules"
		};
		const activeTabItem = this.props.activeTabItem;
		const onTabButtonClick = this.props.onTabButtonClick;
		const buttonSaveState = this.props.buttonSaveState;
		const onButtonSaveClick = this.props.onButtonSaveClick;

		return (
			<aside className="toolbar-zone">
				<div className="toolbar-ctn">
					<nav className="toolbar-tabs">
						<div className="toolbar-scroll">
							<div className="toolbar-tabs-wrapper">
								<ToolbarTabButton
									name="tokens"
									label="Tokens"
									isActive={activeTab.tokens}
									onClick={onTabButtonClick}
								/>
								<ToolbarTabButton
									name="typography"
									label="Typography"
									isActive={activeTab.typography}
									onClick={onTabButtonClick}
								/>
								<ToolbarTabButton
									name="modules"
									label="Modules"
									isActive={activeTab.modules}
									onClick={onTabButtonClick}
								/>
							</div>
						</div>
					</nav>
					<main className="toolbar-content">
						<TabTokens isActive={activeTab.tokens}/>
						<TabTypography isActive={activeTab.typography}/>
						<TabModules isActive={activeTab.modules}/>
					</main>
					<footer className="toolbar-buttons">
						<ButtonSave
							saveState={buttonSaveState}
							onClick={onButtonSaveClick} 
						/>
					</footer>
				</div>
			</aside>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onTabButtonClick: (tabName) => dispatch(ActionCreators.changeTab(tabName)),
	onButtonSaveClick: () => dispatch(ActionCreators.saveProject())
});

const mapStateToProps = (state) => ({
	activeTab: state.activeTab,
	activeTabItem: state.activeTabItem,
	tokensGroups: state.tokensGroups,
	tokens: state.tokens,
	modulesSchema: state.modulesSchema,
	modules: state.modules,
	options: state.options,
	fontRecipes: state.fontRecipes,
	fonts: state.fonts,
	buttonSaveState: state.ui.buttonSaveState
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
