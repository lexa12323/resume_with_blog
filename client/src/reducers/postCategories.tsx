import { FETCH_CATEGORIES, IS_CAT_LOADING } from '../constants/actionTypes'

type PostCategoryState = {
    list: Array<any>,
    loading: boolean,
    loaded: boolean
}

const defaultState: PostCategoryState = {list: [], loading:false, loaded: false}


const reducer = (categories: PostCategoryState = defaultState, action: ActionRedux): PostCategoryState => {

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