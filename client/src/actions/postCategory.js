import * as api from '../api'
import { FETCH_CATEGORIES, IS_CAT_LOADING } from '../constants/actionTypes'

export const getCategories = () => async (dispatch) => {
    
    
    try {
        dispatch({ type: IS_CAT_LOADING });

        const { data } = await api.fetchCategories()

        const action = { type: FETCH_CATEGORIES, payload: data }

        dispatch(action);
        

    } catch (error) {
        console.log(error.message)
    }
}