import axios from "axios"
import { toast } from "react-toastify"
import { loginSucess, registerStart, registerFailed, loginStart, loginFailed, logoutStart, logoutFailed } from "./authSlice"
import { option } from "../../config/toastOption"


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/auth/login', user)
        dispatch(loginSucess(res.data))
        toast.success('You have successfully logined', option)
        navigate('/')
    } catch (error) {
        dispatch(loginFailed())
    }
}


export const registerUser = async (user, dispatch, navigate ) => {

    dispatch(registerStart())
    try {
    await axios.post('http://127.0.0.1:8000/api/auth/register', user)
        dispatch(loginSucess())
        toast.success('You have successfully registered', option)
        navigate('/login')
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const logoutUser = async(dispatch, navigate) => {
    dispatch(logoutStart())
    try {
        await axios.post('http://127.0.0.1:8000/api/auth/logout')
        toast.success('You have successfully logout')
        navigate('/login')
    } catch (error) {
        dispatch(logoutFailed());
    }
}
