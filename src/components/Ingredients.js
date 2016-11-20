/**
 * Created by enriq on 20/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon,
    FormGroup,

    ControlLabel,
    FormControl
} from 'react-bootstrap';

let Ingredients = props => {
    const {
        ingredients,
        selectedIngredients,
        ingredientSelect,
        ingredientAdd,
        removeIngredient
    }= props;

    let selectedIngredientOnScreen = selectedIngredients.map((selectedIngredient) => {
        return (<Button
            key={selectedIngredient.id}
            type="button"
            bsStyle="danger"
            onClick={() => removeIngredient(selectedIngredient.id)}
        >
            {selectedIngredient.name + ' '}<Glyphicon glyph="remove"/> </Button>)
    });

    return (
        <div >
            <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Ingredients:</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={ingredientSelect}>
                    <option value="0">Choose Ingredients</option>
                    {
                        ingredients.map(ingredient => {
                            return (<option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)
                        })
                    }
                </FormControl>
            </FormGroup>
            <Button
                type="button"
                bsStyle="danger"
                onClick={() => ingredientAdd()}
            >
                <Glyphicon glyph="plus"/>
            </Button>
            {selectedIngredientOnScreen}
        </div>
    );
};

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired,
    selectedIngredients: PropTypes.array.isRequired,
    ingredientSelect: PropTypes.func.isRequired,
    ingredientAdd: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired
};

export default Ingredients;
