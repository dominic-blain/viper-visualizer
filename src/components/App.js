import React from 'react';
import ReactDOM from 'react-dom';
import ActionCreators from '../actions/ActionCreators';
import { Provider, connect } from 'react-redux';
import store from '../store/store.js';
import styles from '../styles/main.less';
import { version } from '../../package.json';
// Components
import Toolbar from './Toolbar';
import Article from './Article';
import KeyHandler from './KeyHandler';

class App extends React.Component {
	componentWillMount() {
		store.dispatch(ActionCreators.getFontList());
		store.dispatch(ActionCreators.loadProject());
	}

	render() {
		return (
			<Provider store={store}>
				<div>
					<Toolbar />
					<Article />
					<KeyHandler />
					<div className="app-version">
						<a target="_blank" href="https://github.com/dominic-blain/viper-visualizer">
							{'v' + version}
						</a>
					</div>
				</div>
			</Provider>
		);
	}
};

export default App;

