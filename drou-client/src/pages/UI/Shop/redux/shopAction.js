import * as requestFromServer from './shopApi'
import { callTypes, productSlice } from "./shopSlice";

const {actions} = productSlice;


export const fetchProductsAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer.getAllProducts(lms, queryParams)
    .then((response) => {
        const totalCount = response.data.total;
        const data = response.data.data;
        const from = response.data.from;
        const to = response.data.to;
        dispatch(actions.productsFetched({totalCount, data, from, to}))
    })
    .catch((error) => {
    })
}

export const fetchCategoriesAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return requestFromServer.getAllCategories(lms, queryParams)
    .then((response) => {
        const data = response.data.data;
        dispatch(actions.categoriesFetched({data}))
    })
}

export const fetchTopProductsAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return requestFromServer.getAllCategories(lms, queryParams)
    .then((response) => {
        const data = response.data.data;
        dispatch(actions.topProductsFetched({data}))
    })
}

// export const uploadImageAction = (params) => (dispatch) => {
//     dispatch(actions.startCall({callTypes: callTypes.action}))
//     return requestFromServer.uploadImage(params).catch((error) => {
//         dispatch(actions.catchError({error, callTypes:callTypes.action}))
//     })
// }
