/**
 * Created by enriq on 19/11/16.
 */
import * as types from '../actions/actionTypes';

export default (state = {
    ingredients: [],
}, action) => {
    switch (action.type) {
        case types.LOAD_INGREDIENTS:
            return Object.assign({}, state, {ingredients: action.ingredients});
        default:
            return state;
    }
};