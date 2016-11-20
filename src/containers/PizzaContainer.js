/**
 * Created by enriq on 19/11/16.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ingredientActions from '../actions/ingredientActions';
import * as clientActions from '../actions/clientActions';
import * as pizzaActions from '../actions/pizzaActions';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Pizza.css';
import YourOrder from '../components/YourOrder'
import DeliveryAddress from '../components/DeliveryAddress'
import _ from 'lodash';

class PizzaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temporarySelectedIngredient: {},
            pizzaSize: 0,
            isCheeseRand: false,
            values: {}
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.actions.loadIngredients();
        // this.props.actions.submitPizza({pizza: "submit"});
    }

    componentWillReceiveProps(nextProps) {
    }

    ingredientSelect = (e) => {
        let name = e.target.options[e.target.selectedIndex].text;
        let id = parseInt(e.target.value, 10);
        let temporarySelectedIngredient = {id, name};
        this.setState({temporarySelectedIngredient});
    };

    ingredientAdd = () => {
        if (!_.isEmpty(this.state.temporarySelectedIngredient)) {
            this.props.actions.addIngredient(this.state.temporarySelectedIngredient);
            this.setState({temporarySelectedIngredient: {}});
        }
    };

    setPizzaSize = (pizzaSize) => {
        this.setState({pizzaSize});
    }

    toggleCheeseRand = (isCheeseRand) => {
        this.setState({isCheeseRand});
    }

    onTextChange = (e) => {
        let field = e.target.id;
        let value = e.target.value;
        let values = this.state.values;
        values[field] = value;
        this.setState({values});
    }

    render() {
        return (
            <Grid fluid>
                <Row className='header'>
                    <Col md={6}>
                        <td className='header-logo'>
                            <Button><h2 className='myText'>texto</h2></Button>

                        </td>
                    </Col>
                    <Col md={6} className='header-menu-div'>
                        <td className='header-menu-td'>
                            hola

                        </td>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='pizza-body'>
                        <YourOrder
                            ingredients={this.props.ingredients}
                            selectedIngredients={this.props.selectedIngredients}
                            ingredientSelect={this.ingredientSelect}
                            ingredientAdd={this.ingredientAdd}
                            pizzaSize={this.state.pizzaSize}
                            setPizzaSize={this.setPizzaSize}
                            isCheeseRand={this.state.isCheeseRand}
                            toggleCheeseRand={this.toggleCheeseRand}
                            removeIngredient={this.props.actions.removeIngredient}
                        />
                        <DeliveryAddress
                            values={this.state.values}
                            onTextChange={this.onTextChange}
                        />
                    </Col>
                </Row>

            </Grid>

        );
    }
}

PizzaContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {ingredientReducer, clientReducer, pizzaReducer} = state;
    const {ingredients} = ingredientReducer;
    const {client} = clientReducer;
    const {selectedIngredients, response} = pizzaReducer;
    return {
        ingredients,
        client,
        selectedIngredients,
        response
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, ingredientActions, clientActions, pizzaActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);