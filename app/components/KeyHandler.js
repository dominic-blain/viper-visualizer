import React from 'react';
import {connect} from 'react-redux';
import ActionCreators from '../actions/ActionCreators';
import Mousetrap from 'mousetrap';

class KeyHandler extends React.Component {
	constructor(props) {
		super(props);
		this.handleHotkeyChange = this.handleHotkeyChange.bind(this);
		this.bindMousetrap = this.bindMousetrap.bind(this);
	}

	handleHotkeyChange(name, hot) {
		this.props.onHotkeyChange(name, hot);
	}

	bindMousetrap(binding) {
		const shortcuts = this.props.shortcuts;
		for (var shortcutName in shortcuts) {
			const shortcut = shortcuts[shortcutName];
			Mousetrap[binding](shortcut.keyValue, () => {
				this.handleHotkeyChange(shortcutName, true)
			}, 'keydown');
			Mousetrap[binding](shortcut.keyValue, () => {
				this.handleHotkeyChange(shortcutName, false)
			}, 'keyup');
		}
	}

	componentWillMount() {
		this.bindMousetrap('bind');
	}

	componentDidUnmount() {
		this.bindMousetrap('unbind');
	}

	render() {
		return false;
	}
}
const mapDispatchToProps = (dispatch) => ({
	onHotkeyChange: (name, hot) => dispatch(ActionCreators.setHotkey(name, hot))
});

const mapStateToProps = (state) => ({
	shortcuts: state.shortcuts
});

export default connect(mapStateToProps, mapDispatchToProps)(KeyHandler);
