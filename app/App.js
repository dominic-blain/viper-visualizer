import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store/store.js';
import ActionCreators from './actions/ActionCreators';
import styles from './styles/main.less';
import {version} from '../package.json';
// Components
import Toolbar from './components/Toolbar';
import Article from './components/Article';

class App extends React.Component {
	componentWillMount() {
		store.dispatch(ActionCreators.getFontList());
	}

	render() {
		return (
			<div>
				<Toolbar />
				<Article />
				<div className="app-version">
					<a target="_blank" href="https://github.com/dominic-blain/viper-visualizer">
						{'v' + version}
					</a>
				</div>
			</div>

		);
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
