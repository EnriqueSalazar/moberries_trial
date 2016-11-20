/**
 * Created by enriq on 21/11/16.
 */
import React, { PropTypes } from 'react';
import {
    Modal,
    Button,
    Glyphicon
} from 'react-bootstrap';

let PizzaHome = props => {
    const {
        nextPizzaHome
    }= props;
    return (
        <div>
            <Button
                type="button"
                onClick={()=> nextPizzaHome()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Order Today's Meal"}
            </Button>        </div>
    )
}

PizzaHome.propTypes = {
    startYourOrder:PropTypes.func.isRequired
};

export default PizzaHome;