/**
 * Created by enriq on 19/11/16.
 */
import * as types from '../actions/actionTypes';

export default (state ={
client: {}
}, action) => {
    switch (action.type) {
        case types.ADD_CLIENT:
            return Object.assign({},state,{client:action.client});
       case types.RESET_CLIENT:
            return Object.assign({},state,{client:{}});
        default:
            return state;
    }
};