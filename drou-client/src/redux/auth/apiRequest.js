import axios from "axios"
import { toast } from "react-toastify"
import { loginSucess, registerStart, registerFailed } from "./authSlice"
import { option } from "../../config/toastOption"


export const registerUser = async (user, dispatch, navigate ) => {

    dispatch(registerStart())
    try {
    await axios.post('http://127.0.0.1:8000/api/auth/register', user)
        dispatch(loginSucess())
        toast.success('You have successfully registered', option)
        navigate('/login')
    } catch (error) {
        dispatch(registerFailed)
    }
}
