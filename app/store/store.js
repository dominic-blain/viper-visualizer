import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import apiMiddleware from '../middlewares/apiMiddleware';



const store = createStore(reducer, undefined, applyMiddleware(apiMiddleware));
export default store;