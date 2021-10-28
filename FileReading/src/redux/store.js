import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import configReducer from './reducers/config';

const rootReducer = combineReducers({configReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
