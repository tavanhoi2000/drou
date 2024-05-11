import * as requestFromServer from './categoryApi'
import { callTypes, categorySlice } from "./categorySlice";

const {actions} = categorySlice


export const fetchCategoriesAction = (lms, queryParams) => (dispatch) => {
    dispatch(actions.startCall({callTypes: callTypes.list}))
    return  requestFromServer
}