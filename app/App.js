import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
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

ReactDOM.render(
  <Provider store={store}>
	  <App />
  </Provider>,
  document.getElementById('root')
);
