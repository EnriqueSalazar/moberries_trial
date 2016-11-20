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
    ButtonGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';
import _ from 'lodash';

let Ingredients = props => {
    const {
        ingredients,
        selectedIngredients,
        ingredientSelect,
        ingredientAdd
    }= props;

    return (
        <div>
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
                <Glyphicon glyph="erase"/>
            </Button>

        </div>
    );
};

Ingredients.propTypes = {
    initialValues: PropTypes.object.isRequired,
    grupoSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
};

export default Ingredients;
