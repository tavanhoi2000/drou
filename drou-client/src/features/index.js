import { FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE}from '../constants'
import { getDocs } from 'firebase/firestore'
import { productCollection } from '../config/firebase'
const getProducts = () => async dispatch => {
    dispatch({type: FETCH_PRODUCT_REQUEST})
    try {
        const data = await getDocs(productCollection)
        const productsItem = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        dispatch({type: FETCH_PRODUCT_SUCCESS, payload: productsItem})
    } catch (error) {
        dispatch({type: FETCH_PRODUCT_FAILURE, payload:error.message})
    }
}

export { getProducts };
