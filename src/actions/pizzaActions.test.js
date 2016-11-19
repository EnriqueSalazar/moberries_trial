/**
 * Created by enriq on 19/11/16.
 */
import * as types from './actionTypes'
import * as actions from './pizzaActions'

describe('pizzaActions', () => {
    it('should create action to add ingredients to the pizza', () => {
        const ingredientId = 311;
        const expectedAction = {
            type: types.ADD_INGREDIENT,
            ingredientId
        };
        expect(actions.addIngredient(311)).toEqual(expectedAction)
    });

    it('should create action to remove ingredients from the pizza', () => {
        const ingredientId = 311;
        const expectedAction = {
            type: types.REMOVE_INGREDIENT,
            ingredientId
        };
        expect(actions.removeIngredient(311)).toEqual(expectedAction)
    });

    it('should create action to reset the ingredients', () => {
        const expectedAction = {
            type: types.RESET_INGREDIENTS,
        };
        expect(actions.resetIngredients()).toEqual(expectedAction)
    });

   it('should create action to after submitting the pizza successfully', () => {
        const response = 'OK';
        const expectedAction = {
            type: types.SUBMIT_PIZZA,
            response
        };
        expect(actions.submitPizzaSuccess("OK")).toEqual(expectedAction)
    });

    it('should create action to reset the pizza', () => {
        const expectedAction = {
            type: types.RESET_PIZZA,
        };
        expect(actions.resetPizza()).toEqual(expectedAction)
    });

});

