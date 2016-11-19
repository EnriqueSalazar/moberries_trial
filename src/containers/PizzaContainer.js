/**
 * Created by enriq on 19/11/16.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ingredientActions from '../actions/ingredientActions';

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
    const {ingredientReducer} = state;
    const {ingredients} = ingredientReducer;
    return {
        ingredients
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ingredientActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);