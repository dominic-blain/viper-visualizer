import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import PropTypes from 'prop-types';
import ActionCreators from './actions/ActionCreators';
import store from './store/store.js';
import styles from './styles/main.less';
// Components
import Toolbar from './components/Toolbar';
import ModuleContainer from './components/ModuleContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Toolbar />
				<ModuleContainer />
			</div>
		);
	}
}
App.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	optionsGroups: PropTypes.arrayOf(PropTypes.object),
	modules: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => (
{
	options: state.options,
	optionsGroups: state.optionsGroups,
	modules: state.modules
});

const mapDispatchToProps = (dispatch) => (
{
	updateOption: (value) => dispatch(ActionCreators.updateOption(value))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
	  <AppContainer />
  </Provider>,
  document.getElementById('root')
);
