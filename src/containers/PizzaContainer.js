/**
 * Created by enriq on 19/11/16.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ingredientActions from '../actions/ingredientActions';
import * as clientActions from '../actions/clientActions';
import * as pizzaActions from '../actions/pizzaActions';
// import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Pizza.css';
import YourOrder from '../components/YourOrder'
import DeliveryAddress from '../components/DeliveryAddress'
import PizzaModal from '../components/PizzaModal'
import PizzaHome from '../components/PizzaHome'
import EverythingCorrect from '../components/EverythingCorrect'
import ThankYou from '../components/ThankYou'
import _ from 'lodash';

class PizzaContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temporarySelectedIngredient: {},
            pizzaSize: 0,
            isCheeseRand: false,
            clientValues: {},
            isYourOrder: true,
            isDeliveryAddress: false,
            isEverythingCorrect: false,
            isThankYou: false,
            isPizzaHome: false,
            todaysPizza: 'Steinofen-Pizza'
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.props.actions.loadIngredients();
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
    };

    toggleCheeseRand = (isCheeseRand) => {
        this.setState({isCheeseRand});
    };

    onTextChange = (e) => {
        let field = e.target.id;
        let value = e.target.value;
        let clientValues = this.state.clientValues;
        clientValues[field] = value;
        this.setState({clientValues});
    };

    toggleDeliveryAddressModal = () => {
        this.setState({isDeliveryAddress: !this.state.isDeliveryAddress});
    };
    toggleEverythingCorrectModal = () => {
        this.setState({isEverythingCorrect: !this.state.isEverythingCorrect});
    };
    toggleThankYouModal = () => {
        this.setState({isThankYou: !this.state.isThankYou});
    };
    toggleYourOrderModal = () => {
        this.setState({isYourOrder: !this.state.isYourOrder});
    };
    togglePizzaHomeModal = () => {
        this.setState({isPizzaHome: !this.state.isPizzaHome});
    };
    nextPizzaHome = () => {
        this.togglePizzaHomeModal();
        this.toggleYourOrderModal()
    };
    nextYourOrder = () => {
        this.toggleYourOrderModal();
        this.toggleDeliveryAddressModal();
    };
    backYourOrder = () => {
        this.toggleYourOrderModal();
        this.togglePizzaHomeModal();

    };
    nextDeliveryAddress = () => {
        this.props.actions.addClient(this.state.clientValues);
        this.toggleDeliveryAddressModal();
        this.toggleEverythingCorrectModal();
    };
    backDeliveryAddress = () => {
        this.toggleDeliveryAddressModal();
        this.toggleYourOrderModal();
    };
    nextEverythingCorrect = () => {
        this.toggleEverythingCorrectModal();
        this.toggleThankYouModal();
        let selectedIngredients= this.props.selectedIngredients;
        let pizzaSize=this.state.pizzaSize;
        let isCheeseRand=this.state.isCheeseRand;
        let client=this.props.client;
        let todaysPizza=this.state.todaysPizza;
        let pizza={
            selectedIngredients,
            pizzaSize,
            isCheeseRand,
            client,
            todaysPizza
        };
        this.props.actions.submitPizza({pizza});

    };
    backEverythingCorrect = () => {
        this.toggleEverythingCorrectModal();
        this.toggleDeliveryAddressModal();
    };
    nextThankYou = () => {
        this.toggleThankYouModal();
        this.togglePizzaHomeModal();
    };
    backThankYou = () => {
        this.toggleThankYouModal();
        this.toggleEverythingCorrectModal()
    };

    render() {
        return (
            <div>


                <Grid fluid>
                    <Row className='header'>
                        <Col md={6}>
                            <table className='header-logo'>
                                <tbody>
                                <tr>
                                    <td>

                                        <Button><h2 className='myText'>texto</h2></Button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col md={6} className='header-menu-div'>
                            <table className='header-menu-td'>
                                <tbody>
                                <tr>
                                    <td>
                                        hola
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                    <Row className='pizza-body'>
                        <Col md={2}/>
                        <Col md={8}>

                            {!this.state.isPizzaHome ? null :
                                <PizzaHome
                                    nextPizzaHome={this.nextPizzaHome}
                                />
                            }
                            <PizzaModal show={this.state.isYourOrder}>
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
                                    nextYourOrder={this.nextYourOrder}
                                    backYourOrder={this.backYourOrder}
                                />
                            </PizzaModal>
                            <PizzaModal show={this.state.isDeliveryAddress}>
                                <DeliveryAddress
                                    clientValues={this.state.clientValues}
                                    onTextChange={this.onTextChange}
                                    nextDeliveryAddress={this.nextDeliveryAddress}
                                    backDeliveryAddress={this.backDeliveryAddress}
                                />
                            </PizzaModal>
                            <PizzaModal show={this.state.isEverythingCorrect}>
                                <EverythingCorrect
                                    nextEverythingCorrect={this.nextEverythingCorrect}
                                    backEverythingCorrect={this.backEverythingCorrect}
                                    isCheeseRand={this.state.isCheeseRand}
                                    pizzaSize={this.state.pizzaSize}
                                    todaysPizza={this.state.todaysPizza}
                                    client={this.props.client}
                                    selectedIngredients={this.props.selectedIngredients}

                                />
                            </PizzaModal>
                            <PizzaModal show={this.state.isThankYou}>
                                <ThankYou
                                    nextThankYou={this.nextThankYou}
                                    backThankYou={this.backThankYou}
                                    client={this.props.client}
                                    response={this.props.response}

                                />
                            </PizzaModal>
                        </Col>
                    </Row>

                </Grid>

            </div>

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