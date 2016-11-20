/**
 * Created by enriq on 21/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Grid,
} from 'react-bootstrap';

let PizzaModal = props => {
    const {
        show,
        children
    }= props;
    return !show ? null : (
        <div className="pizzaModal">
            <Grid fluid
                bsSize="large"
            >
                {children}
            </Grid>
        </div>
    )
};

PizzaModal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default PizzaModal;