/**
 * Created by enriq on 20/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon,
    Row, Col,
    FormGroup,
    Grid,
    Modal,
    ButtonGroup
} from 'react-bootstrap';
import _ from 'lodash';
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
        removeIngredient
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
    removeIngredient:PropTypes.func.isRequired
};

export default YourOrder;
