/**
 * Created by enriq on 19/11/16.
 */
import rootReducer from '../reducers';
import { createStore } from 'redux';

export default (initialState) => {
    return createStore(rootReducer, initialState);
};