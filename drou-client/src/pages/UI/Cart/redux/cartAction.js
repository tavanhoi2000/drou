import {callTypes,cartSlice } from './cartSlice';
import * as requestFromServer from './cartApi'

const {actions} = cartSlice;

export const createOrderAction = (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return requestFromServer.createOrder(params).catch((error) => {
        dispatch(actions.catchError({error, callTypes:callTypes.action}))
    })
}





