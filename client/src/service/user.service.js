import * as api from '../api'
import { storageLabel } from '../constants/common'

export const logoutService = () => {
    localStorage.removeItem(storageLabel)
}

export const loginService = async (formData) => {
    const { data } = await api.signin(formData)
    localStorage.setItem(storageLabel, JSON.stringify(data))
    return data
}