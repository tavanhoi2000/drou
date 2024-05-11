import * as requestFromServer from './categoryApi'
import { callTypes, categorySlice } from "./categorySlice";

const {actions} = categorySlice


export const fetchCategoriesAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer.getAllCategories(lms, queryParams)
    .then((response) => {
        const totalCount = response.data.total;
        const data = response.data.data;
        dispatch(actions.categoriesFetched({totalCount, data}))
    })
    .catch((error) => {
       
    })
}