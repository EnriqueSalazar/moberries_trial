/**
 * Created by enriq on 19/11/16.
 */
import * as types from '../actions/actionTypes';

export default (state = {
    selectedIngredients: [],
    response:''
}, action) => {
    switch (action.type) {
        case types.ADD_INGREDIENT:
            return (
                Object.assign(
                    {}, state, {
                        selectedIngredients: [...state.selectedIngredients, action.ingredientId]
                    }));
        case types.REMOVE_INGREDIENT:
            return (
                Object.assign(
                    {}, state, {
                        selectedIngredients: state.selectedIngredients.filter(ingredientId=>{
                            return ingredientId !== action.ingredientId;
                        })
                    }));
        case types.RESET_INGREDIENTS:
            return Object.assign({}, state, {selectedIngredients: []});
        case types.SUBMIT_PIZZA:
            return Object.assign({}, state, {response: action.response});
        case types.RESET_PIZZA:
            return Object.assign({}, state, {response: {}, selectedIngredients: []});
        default:
            return state;
    }
};