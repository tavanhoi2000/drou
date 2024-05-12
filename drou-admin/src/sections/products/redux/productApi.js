import axios from "axios";
// import { toast } from "react-toastify";

const endpoints = {
    getProducts: "http://127.0.0.1:8000/api/product",
    createProduct: "http://127.0.0.1:8000/api/product",
    uploadFile: "http://127.0.0.1:8000/api/upload-file",
    deleteProduct: (productId) => `http://127.0.0.1:8000/api/product/${productId}`
}

export function getAllProducts() {
    return axios.get(endpoints.getProducts)
}

export function deleteProduct(params) {
    return axios.delete(endpoints.deleteProduct(params.id))
}

export function createProduct(params) {
    const bodyFormData = new FormData();
    Object.keys(params).forEach((key) => {
        bodyFormData.append(key, params[key])
    })
    return axios.post(endpoints.createProduct, bodyFormData)
}
