import * as requestFromServer from './orderApi'
import { callTypes, ordersSlice } from "./orderSlice";

const {actions} = ordersSlice


export const fetchOrdersAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer.getAllOrders(lms, queryParams)
    .then((response) => {
        const totalCount = response.data.total;
        const data = response.data.data;
        dispatch(actions.ordersFetched({totalCount, data}))
    })
    .catch((error) => {
       
    })
}

export const addNewOrderAction= (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: actions.action}))
    return requestFromServer.createOrder(params).catch((error) => {
        dispatch(actions.catchError({error, callTypes: callTypes.action}))
    })
}

export const deleteOrderAction = (params) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .deleteOrder(params)
      .catch((error) => {
        error.clientMessage = error.message
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      })
      .finally(() => {
        dispatch(actions.endCall({ callType: callTypes.action }));
      });
  };

  export const updateOrderAction = (params) => (dispatch) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .updateOrder(params)
      .catch((error) => {
        error.clientMessage = "Can't update order";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      })
      .finally(() => {
        dispatch(actions.endCall({ callType: callTypes.action }));
      });
  };
