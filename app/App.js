import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store/store.js';
import ActionCreators from './actions/ActionCreators';
import styles from './styles/main.less';
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
