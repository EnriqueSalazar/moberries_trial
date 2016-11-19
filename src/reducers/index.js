/**
 * Created by enriq on 19/11/16.
 */
import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer'
import clientReducer from './clientReducer'

const rootReducer = combineReducers({
    ingredientReducer,
    clientReducer
});

export default rootReducer;