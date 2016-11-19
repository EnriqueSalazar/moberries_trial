/**
 * Created by enriq on 19/11/16.
 */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as types from './actionTypes'
import * as actions from './clientActions'


describe('clientActions', () => {
    it('should create action to add client', () => {
        const client = {name:'Enrique Salazar', phone:'300300300'};
        const expectedAction = {
            type: types.ADD_CLIENT,
            client
        };
        expect(actions.addClient({name: 'Enrique Salazar', phone: '300300300'})).toEqual(expectedAction)
    });

    it('should create action to reset the client', () => {
        const expectedAction = {
            type: types.RESET_CLIENT,
        };
        expect(actions.resetClient()).toEqual(expectedAction)
    });

});

