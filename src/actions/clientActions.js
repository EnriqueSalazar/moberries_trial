/**
 * Created by enriq on 19/11/16.
 */
import * as types from './actionTypes'

export const addClient = (client) => {
    return {
        type: types.ADD_CLIENT,
        client
    }
};

export const resetClient = () => {
    return {
        type: types.RESET_CLIENT
    }
};