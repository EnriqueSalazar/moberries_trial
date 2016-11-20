/**
 * Created by enriq on 21/11/16.
 */

import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';

let ThankYou = props => {
    const {
        nextThankYou,
        backThankYou,
        client,
        response
    }= props;
    let responseOk = (
        <div>
            {'Thank you for your order, ' + client.firstName}<br/>
            <Button
                type="button"
                onClick={() => nextThankYou()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Next"}
            </Button>
        </div>
    );
    let responseError = (
        <div>
            {response}<br/>
            <Button
                type="button"
                onClick={() => backThankYou()}
                bsStyle="danger"
            >
                <Glyphicon glyph="plus"/>{" Back"}
            </Button>
        </div>
    );
    let RenderThankYou = () => {
        return response === "OK" ? responseOk : responseError;
    };
    return (
        <div>
            <RenderThankYou/>
        </div>
    )
}

ThankYou.propTypes = {
    nextThankYou: PropTypes.func.isRequired,
    backThankYou: PropTypes.func.isRequired,
    client: PropTypes.object.isRequired,
    response: PropTypes.node.isRequired
};

export default ThankYou;