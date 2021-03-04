import postReducer from './posts'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes'

describe('Posts reducer test', () => {

    it('should return default state', () => {
        const newState = postReducer(undefined, {})
        expect(newState).toEqual([])
    })

    it('should return new state', () => {
        const posts = [{"title": "post 1"}, {"title": "post 2"}]
        const newState = postReducer(undefined, {
            type: FETCH_ALL,
            payload: posts,
        })
        expect(newState).toEqual(posts)
    })
})