import Cookies from 'js-cookie'
import * as api from '../api'
import { start, end, error, registerReducer, loginReducer, logoutReducer, getUsersReducer, } from '../reducers/user'


export const register = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.register(userData)
        dispatch(registerReducer(data.result))
        navigate('/auth/login')
        dispatch(end())
    }
    catch (err) {
        dispatch(error(err.message))
    }
}
export const login = (userData, navigate) => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.login(userData)
        dispatch(loginReducer(data.result))
        const token = data.result.token;
        Cookies.set('iamnauman_profile', JSON.stringify({ token }), {
       expires: 2,         // optional: days (2 = 2 days, same as refresh token)
      sameSite: 'Lax',    // safe for local dev
      secure: false       // set to true on HTTPS
    });

         const mode = data.result.role === 'admin' ? 'admin' : 'user'
        localStorage.setItem('mode', mode)
        navigate('/')
        dispatch(end())
    }
    catch (err) {
        dispatch(error(err.message))
    }
}
export const logout = () => async (dispatch) => {
    try {
        dispatch(start())
        dispatch(logoutReducer())
        Cookies.remove('iamnauman_profile')
         localStorage.setItem('mode', 'user') 
        dispatch(end())
    }
    catch (err) {
        dispatch(error(err.message))
    }
}
export const getUsers = () => async (dispatch) => {
    try {
        dispatch(start())
        const { data } = await api.getUsers()
        dispatch(getUsersReducer(data.result))
        dispatch(end())
    }
    catch (err) {
        dispatch(error(err.message))
    }
} 