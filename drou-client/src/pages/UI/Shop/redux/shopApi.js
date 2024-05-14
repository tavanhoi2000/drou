import axios from "axios";
const endpoints = {
    getProducts: "http://127.0.0.1:8000/api/product",
    getProduct: (product) => `http://127.0.0.1/api/product/${product}`,
    getAllCategories: "http://127.0.0.1:8000/api/category"
}

export function getAllProducts(params) {
    return axios.get(endpoints.getProducts,{params: params})
}

export function getProductById(params) {
    return axios.get(endpoints.getProduct(params))
}

export const getAllCategories = (params) => {
    return axios.get(endpoints.getAllCategories)
}
