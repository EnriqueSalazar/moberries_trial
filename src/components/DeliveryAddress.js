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

let DeliveryAddress = props => {
    const {
        clientValues,
        onTextChange,
        nextDeliveryAddress,
        backDeliveryAddress
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
                        value={clientValues.firstName}
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
                        value={clientValues.surname}
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
                        value={clientValues.street}
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
                        value={clientValues.no}
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
                        value={clientValues.postcode}
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
                        value={clientValues.city}
                        placeholder="City"
                        onChange={onTextChange}
                    />
                </FormGroup>
            </form>
            <Button
                type="button"
                onClick={() => backDeliveryAddress()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Back"}
            </Button>
            <Button
                type="button"
                onClick={() => nextDeliveryAddress()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Next"}
            </Button>
        </div>
    );
};

DeliveryAddress.propTypes = {
    clientValues: PropTypes.object.isRequired,
    onTextChange: PropTypes.func.isRequired,
    backDeliveryAddress: PropTypes.func.isRequired,
    nextDeliveryAddress: PropTypes.func.isRequired
};

export default DeliveryAddress;
