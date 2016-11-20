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
import Ingredients from './Ingredients'

let YourOrder = props => {
    const {
        ingredients,
        selectedIngredients,
        ingredientSelect,
        ingredientAdd
    }= props;

    return (
        <div>
            <Ingredients
                ingredients={ingredients}
                selectedIngredients={selectedIngredients}
                ingredientSelect={ingredientSelect}
                ingredientAdd={ingredientAdd}
            />
        </div>
    );
};

YourOrder.propTypes = {
    initialValues: PropTypes.object.isRequired,
    grupoSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
};

export default YourOrder;
