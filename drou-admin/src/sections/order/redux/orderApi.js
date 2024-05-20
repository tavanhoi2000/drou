import axios from "axios";

const endpoints = {
    getOrders: 'http://127.0.0.1:8000/api/order',
    createOrder: 'http://127.0.0.1:8000/api/order',
    deleteOrder: (orderId) => `http://127.0.0.1:8000/api/order/${orderId}`,
    updateOrder: (orderId) => `http://127.0.0.1:8000/api/order/${orderId}`
}

export function getAllOrders() {
    return axios.get(endpoints.getOrders)
}


export function createOrder(params) {
    const bodyFormData = new FormData();
    Object.keys(params).forEach((key) => {
        bodyFormData.append(key, params[key])
    })
    return axios.post(endpoints.createOrder, bodyFormData)
}

export function deleteOrder(params) {
    return axios.delete(endpoints.deleteOrder(params))
}

export function updateOrder(params) {
    return axios.put(endpoints.updateOrder(params.id), params);
  }
