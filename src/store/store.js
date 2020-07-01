import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import photosReducer from './reducers/photos'

const rootReducer = combineReducers({
    photosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);
