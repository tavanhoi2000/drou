import axios from "axios";
// import { toast } from "react-toastify";


const endpoints = {
    getCategories: 'http://127.0.0.1:8000/api/category',
    createCategory: 'http://127.0.0.1:8000/api/category',
    deleteCategory: (categoryId) => `http://127.0.0.1:8000/api/category/${categoryId}`,
    updateCategory: (categoryId) => `http://127.0.0.1:8000/api/category/${categoryId}`
}

export function getAllCategories() {
    return axios.get(endpoints.getCategories)
}


export function createCategory(params) {
    const bodyFormData = new FormData();
    Object.keys(params).forEach((key) => {
        bodyFormData.append(key, params[key])
    })
    return axios.post(endpoints.createCategory, bodyFormData)
}
export function deleteCategory(params) {
    return axios.delete(endpoints.deleteCategory(params))
}

export function updateCategory(params) {
    const bodyFormData = new FormData();
    Object.keys(params).forEach((key) => {
      bodyFormData.append(key, params[key]);
    });
    return axios.put(endpoints.updateCategory(params.id), bodyFormData);
  }
