/**
 * Created by enriq on 21/11/16.
 */
import React, { PropTypes } from 'react';
import {
    Button,
    Glyphicon
} from 'react-bootstrap';

let PizzaHome = props => {
    const {
        nextPizzaHome
    }= props;
    return (
        <div>
            <center>
                Chosen food every 5 days.<br />
                Today on the table: Original Steinofen-Pizza <br /><br/>
                <Button
                    type="button"
                    onClick={() => nextPizzaHome()}
                    bsStyle="danger"
                >
                    <Glyphicon glyph="plus"/>{" Order Today's Meal"}
                </Button>
                <br/>
                Check out or meal for tomorrow.<br/>
                Made with love.<br/>
            </center>
        </div>
    )
}

PizzaHome.propTypes = {
    nextPizzaHome: PropTypes.func.isRequired
};

export default PizzaHome;