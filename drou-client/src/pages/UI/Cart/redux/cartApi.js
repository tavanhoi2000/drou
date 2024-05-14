import axios from "axios";
const endpoints = {
    createOrder: "http://127.0.0.1:8000/api/order",
}

export function createOrder(params) {
    return axios.post(endpoints.createOrder, params)
}

