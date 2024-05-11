import axios from "axios";
// import { toast } from "react-toastify";

export function getAllCategories() {
    return axios.get('http://127.0.0.1:8000/api/category')
}
