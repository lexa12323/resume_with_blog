import { FETCH_CATEGORIES, IS_CAT_LOADING } from '../constants/actionTypes'

const defaultState = {list: [], loading:false, loaded: false}


const reducer = (categories = defaultState, action) => {

    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...categories, list: action.payload, loaded: true}

        case IS_CAT_LOADING:
            return {...categories, loading: true}
    
        default:
            return categories
    }

}

export default reducer;