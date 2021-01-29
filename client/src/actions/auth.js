import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const signin = (formData, history) => async (dispatch) => {
    
    
    try {
        const { data } = await api.signin(formData)
        console.log('action fired', data)
        const action = { type: AUTH, payload: data }
        
        dispatch(action);

        history.push('/')

    } catch (error) {
        console.log(error)
    }
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