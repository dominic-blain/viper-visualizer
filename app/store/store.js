import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import loggerMiddleware from '../middlewares/loggerMiddleware';

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunk));
export default store;