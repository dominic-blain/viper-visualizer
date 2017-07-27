import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import apiMiddleware from '../middlewares/apiMiddleware';
import loggerMiddleware from '../middlewares/loggerMiddleware';

const store = createStore(reducer, applyMiddleware(loggerMiddleware, apiMiddleware));
export default store;