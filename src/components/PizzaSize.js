/**
 * Created by enriq on 20/11/16.
 */
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
import './PizzaSize.css';

let PizzaSize = props => {
    const {
        setPizzaSize,
        pizzaSize
    }= props;

    let RenderButton =(props)=>{
        const {sizeOption}=props;
        return (
            <Button
                type="button"
                bsStyle="danger"
                onClick={() => setPizzaSize(sizeOption)}
                active={sizeOption=== pizzaSize}
            >
                <h1>{sizeOption}</h1>
            </Button>
        )
    };

    return (
        <div>
            <RenderButton sizeOption={20}/>
            <RenderButton sizeOption={30}/>
            <RenderButton sizeOption={40}/>
            <div className="numberCircle">30</div>

        </div>
    );
};

PizzaSize.propTypes = {
    setPizzaSize:PropTypes.func.isRequired,
    pizzaSize:PropTypes.number.isRequired
};

export default PizzaSize;
