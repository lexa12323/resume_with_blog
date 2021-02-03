import * as api from '../api'
import { loginService, logoutService } from '../service/user.service'
import { AUTH, LOGOUT } from '../constants/actionTypes'

export const signin = (formData, history) => async (dispatch) => {
    
    try {
        const data = await loginService(formData)
        const action = { type: AUTH, payload: data }
        dispatch(action);
        history.push('/')

    } catch (error) {
        console.log(error)
    }
}

export const logout = () => async (dispatch) => {
    const action = { type: LOGOUT }
    dispatch(action);
    logoutService()
}

export const signup = (formData, history) => async (dispatch) => {
    
    
    try {
        const { data } = await api.signup(formData)

        const action = { type: AUTH, payload: data }

        dispatch(action);

        history.push('/')

    } catch (error) {
        console.log(error.message)
    }
}