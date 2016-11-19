/**
 * Created by enriq on 19/11/16.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ingredientActions from '../actions/ingredientActions';
import * as clientActions from '../actions/clientActions';

class PizzaContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.actions.loadIngredients();
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        debugger
        return (
            <div>
                {this.props.ingredients.map(ingredient=>{
                    return (<div key={ingredient.id}>{ingredient.name}</div>)
                })}
            </div>
        );
    }
}

PizzaContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const {ingredientReducer, clientReducer} = state;
    const {ingredients} = ingredientReducer;
    const {client} = clientReducer;
    return {
        ingredients,
        client
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, ingredientActions, clientActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);