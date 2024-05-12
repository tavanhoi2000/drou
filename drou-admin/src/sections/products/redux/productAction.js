import * as requestFromServer from './productApi'
import { callTypes, productSlice } from "./productSlice";

const {actions} = productSlice;


export const fetchProductsAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer.getAllProducts(lms, queryParams)
    .then((response) => {
        const totalCount = response.data.total;
        const data = response.data.data;
        dispatch(actions.productsFetched({totalCount, data}))
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