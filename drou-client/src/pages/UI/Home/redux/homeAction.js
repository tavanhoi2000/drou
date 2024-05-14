import * as requestFromServer from './homeApi'
import { callTypes, homeSlice } from "./homeSlice";

const {actions} = homeSlice;


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


export const fetchLatestProductsActions = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return requestFromServer.getAllProducts(lms,queryParams)
    .then((response) => {
        const data = response.data.data
        dispatch(actions.latestProductsFetched({data}))
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

// export const uploadImageAction = (params) => (dispatch) => {
//     dispatch(actions.startCall({callTypes: callTypes.action}))
//     return requestFromServer.uploadImage(params).catch((error) => {
//         dispatch(actions.catchError({error, callTypes:callTypes.action}))
//     })
// }
