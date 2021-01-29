import { AUTH, LOGOUT } from '../constants/actionTypes'
import { storageLabel } from '../constants/common'

const initialState = JSON.parse(localStorage.getItem(storageLabel));

const reducer = (state = {authData: initialState}, action) => {

    switch (action.type) {
        case AUTH:
            return {...state, authData: action?.payload}

        case LOGOUT:
            return {...state, authData: null}
    
        default:
            return state
    }

}

export default reducer;