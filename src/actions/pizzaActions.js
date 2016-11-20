/**
 * Created by enriq on 19/11/16.
 */
import * as types from './actionTypes'
import axios from 'axios';

export const addIngredient = (ingredient) => {
    return {
        type: types.ADD_INGREDIENT,
        ingredient
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

export const submitPizzaSuccess=(response)=>{
    return {
        type: types.SUBMIT_PIZZA,
        response
    }
};

//Had to install Chrome extension due to CORS issue with Postman's echo.
//Allow-Control-Allow-Origin: * --> https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en
export const submitPizza = (pizza) => {
    return dispatch => {
        return axios.post('http://echo.getpostman.com/post', pizza,{
            "headers": {
                "content-type": "text/plain",
            }
        }).then(
            response => {
                console.info(response);
                dispatch(
                 submitPizzaSuccess(response.statusText));
            }
        ).catch(error => {
            dispatch(
                submitPizzaSuccess(error.message));
            // throw(error);
        });
    }
};

export const resetPizza = () => {
    return {
        type: types.RESET_PIZZA
    }
};