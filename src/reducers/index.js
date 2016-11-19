/**
 * Created by enriq on 19/11/16.
 */
import { combineReducers } from 'redux';
import ingredientReducer from './ingredientReducer'
import clientReducer from './clientReducer'
import pizzaReducer from './pizzaReducer'

const rootReducer = combineReducers({
    ingredientReducer,
    clientReducer,
    pizzaReducer
});

export default rootReducer;