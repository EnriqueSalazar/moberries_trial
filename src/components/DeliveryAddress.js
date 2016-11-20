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

let DeliveryAddress = props => {
    const {
        values,
        onTextChange
    }= props;

    return (
        <div>
            <form>
                <FormGroup
                    controlId="firstName"
                >
                    <ControlLabel>FIRST NAME</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.firstName}
                        placeholder="First Name"
                        onChange={onTextChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="surname"
                >
                    <ControlLabel>SURNAME</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.surname}
                        placeholder="Surname"
                        onChange={onTextChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="street"
                >
                    <ControlLabel>{'STREET/NO'}</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.street}
                        placeholder="Street"
                        onChange={onTextChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="no"
                >
                    <ControlLabel>{' '}</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.no}
                        placeholder="No."
                        onChange={onTextChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="postcode"
                >
                    <ControlLabel>{'POSTCODE/CITY'}</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.postcode}
                        placeholder="Postcode"
                        onChange={onTextChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="city"
                >
                    <ControlLabel>{' '}</ControlLabel>
                    <FormControl
                        type="text"
                        value={values.city}
                        placeholder="City"
                        onChange={onTextChange}
                    />
                </FormGroup>

            </form>
        </div>
    );
};

DeliveryAddress.propTypes = {
    values: PropTypes.object.isRequired,
    onTextChange: PropTypes.func.isRequired
};

export default DeliveryAddress;
