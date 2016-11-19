/**
 * Created by enriq on 19/11/16.
 */
import * as types from './actionTypes'
import fetchIngredients from '../apis/ingredientsService'

export const loadIngredients = () => {
    let fetchData = fetchIngredients();
    let ingredients = fetchData ? fetchData.data : [];
    return {
        type: types.LOAD_INGREDIENTS,
        ingredients
    }
};