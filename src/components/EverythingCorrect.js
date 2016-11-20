/**
 * Created by enriq on 20/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon,
    Grid,
    Col,
    Row
} from 'react-bootstrap';

let EverythingCorrect = props => {
    const {
        nextEverythingCorrect,
        backEverythingCorrect,
        isCheeseRand,
        selectedIngredients,
        pizzaSize,
        client,
        todaysPizza
    }= props;
    let selectedIngredientsString = selectedIngredients?selectedIngredients.map(ingredient => (ingredient.name + ', ')):'';
    return (
        <div>
            <Grid fluid>
                <Row>
                    <Col md={2}/>

                    <Col md={8}>
                        <Grid fluid>
                            <Row>
                                Everything Correct?
                            </Row>
                            <Row>
                                Your order:
                            </Row>
                            <Row>
                                <Col md={6}>
                                    {todaysPizza}<br/>
                                    1x<br/>
                                    Ingredients:<br/>
                                    {selectedIngredientsString}<br/>
                                </Col>
                                <Col md={6}>
                                    Pizza size:<br/>
                                    {pizzaSize}<br/>
                                    Cheese rand:<br/>
                                    {isCheeseRand ? 'Yes' : 'False'}
                                </Col>
                            </Row>
                            <Row>
                                <center>
                                    Delivery Address:
                                </center>

                            </Row>
                            <Row>
                                <center>
                                    { client.firstName + ' ' + client.surname}<br/>
                                    {client.street + ', ' + client.no}<br/>
                                    {client.postcode + ' ' + client.city}<br/>

                                </center>
                            </Row>
                            <Row>

                                <Button
                                    type="button"
                                    onClick={() => backEverythingCorrect()}
                                    bsStyle="danger"
                                >
                                    <Glyphicon glyph="plus"/>{" Back"}
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => nextEverythingCorrect()}
                                    bsStyle="danger"
                                >
                                    <Glyphicon glyph="plus"/>{" Make Order"}
                                </Button>
                            </Row>

                        </Grid>
                    </Col>
                    <Col md={2}/>

                </Row>
            </Grid>

        </div>
    )
}

EverythingCorrect.propTypes = {
    nextEverythingCorrect: PropTypes.func.isRequired,
    backEverythingCorrect: PropTypes.func.isRequired,
    isCheeseRand: PropTypes.bool.isRequired,
    selectedIngredients: PropTypes.array.isRequired,
    pizzaSize: PropTypes.number.isRequired,
    client: PropTypes.object.isRequired,
    todaysPizza: PropTypes.string.isRequired

};

export default EverythingCorrect;