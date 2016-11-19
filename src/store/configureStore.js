/**
 * Created by enriq on 19/11/16.
 */
import rootReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default (initialState) => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk),
        initialState
    );
};