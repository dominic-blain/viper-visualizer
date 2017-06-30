import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store/store.js';
import styles from './styles/main.less';
// Components
import Toolbar from './components/Toolbar';
import Article from './components/Article';

class App extends React.Component {
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
