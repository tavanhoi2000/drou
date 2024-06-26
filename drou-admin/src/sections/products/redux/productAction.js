import * as requestFromServer from './productApi'
import { callTypes, productSlice } from "./productSlice";

const {actions} = productSlice;


export const fetchProductsAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer.getAllProducts(lms, queryParams)
    .then((response) => {
        const totalCount = response.data.total;
        const data = response.data.data;
        const totalPages = response.data.last_page
        dispatch(actions.productsFetched({totalCount, data, totalPages}))
    })
    .catch((error) => {
    })
}

export const deleteProductAction = (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.action}))
    return requestFromServer
    .deleteProduct(params)
    .catch((error) => {
        dispatch(actions.catchError({error, callTypes: callTypes.action}))
    })
    .finally(() => {
        dispatch(actions.endCall({callTypes:callTypes.action}))
    })
}

export const addNewProductAction = (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.action}))
    return requestFromServer.createProduct(params).catch((error) => {
        dispatch(actions.catchError({error, callTypes: callTypes.action}))
    })
}

export const uploadImageAction = (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.action}))
    return requestFromServer.uploadImage(params).catch((error) => {
        dispatch(actions.catchError({error, callTypes:callTypes.action}))
    })
}

export const updateProductAction= (params) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.action}))
    return requestFromServer
      .updateProduct(params)
      .catch((error) => {
        error.clientMessage = "Can't update product";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      })
      .finally(() => {
        dispatch(actions.endCall({ callType: callTypes.action }));
      });

}