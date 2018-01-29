import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import thunk from 'redux-thunk';
import apiMiddleware from '../middlewares/apiMiddleware';
import loggerMiddleware from '../middlewares/loggerMiddleware';

const store = createStore(reducer, applyMiddleware(loggerMiddleware, apiMiddleware, thunk));
export default store;