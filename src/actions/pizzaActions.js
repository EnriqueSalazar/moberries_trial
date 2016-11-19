/**
 * Created by enriq on 19/11/16.
 */
import * as types from './actionTypes'
import axios from 'axios';

export const addIngredient = (ingredientId) => {
    return {
        type: types.ADD_INGREDIENT,
        ingredientId
    }
};
export const removeIngredient = (ingredientId) => {
    return {
        type: types.REMOVE_INGREDIENT,
        ingredientId
    }
};
export const resetIngredients = () => {
    return {
        type: types.RESET_INGREDIENTS
    }
};
export const submitPizza = (pizza) => {
    axios.post('echo.getpostman.com/post', pizza).then(
        response => {
            return {
                type: types.SUBMIT_PIZZA,
                response: response.data
            }
        }
    ).catch(error => {
        debugger;
        return {
            type: types.SUBMIT_PIZZA,
            response: error
        }
    })
};

export const resetPizza = () => {
    return {
        type: types.RESET_PIZZA
    }
};