/**
 * Created by enriq on 20/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';
import Ingredients from './Ingredients';
import PizzaSize from './PizzaSize';

let YourOrder = props => {
    const {
        ingredients,
        selectedIngredients,
        ingredientSelect,
        ingredientAdd,
        setPizzaSize,
        pizzaSize,
        isCheeseRand,
        toggleCheeseRand,
        removeIngredient,
        nextYourOrder,
        backYourOrder
    }= props;

let CheeseRandSwitch = props =>{
    return (
        <Button
            type="button"
            bsStyle="primary"
            onClick={() => toggleCheeseRand(!isCheeseRand)}
            active={isCheeseRand}
        >
            <h1>{isCheeseRand?'Yes':'No'}</h1>
        </Button>
    )
}

    return (
        <div>
            <PizzaSize setPizzaSize={setPizzaSize} pizzaSize={pizzaSize}/>
            <Ingredients
                ingredients={ingredients}
                selectedIngredients={selectedIngredients}
                ingredientSelect={ingredientSelect}
                ingredientAdd={ingredientAdd}
                removeIngredient={removeIngredient}
            />
            <CheeseRandSwitch/>
            <Button
                type="button"
                onClick={() => backYourOrder()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Back"}
            </Button>
     <Button
                type="button"
                onClick={() => nextYourOrder()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Next"}
            </Button>
        </div>
    );
};

YourOrder.propTypes = {
    setPizzaSize: PropTypes.func.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    ingredients:PropTypes.array.isRequired,
    selectedIngredients:PropTypes.array.isRequired,
    ingredientSelect: PropTypes.func.isRequired,
    ingredientAdd: PropTypes.func.isRequired,
    isCheeseRand: PropTypes.bool.isRequired,
    toggleCheeseRand: PropTypes.func.isRequired,
    removeIngredient:PropTypes.func.isRequired,
    nextYourOrder:PropTypes.func.isRequired,
    backYourOrder:PropTypes.func.isRequired,
};

export default YourOrder;
