import React from 'react'
import { Post } from './Posts'
import * as reactRedux from 'react-redux'

const setUp = (props) => shallow(<Post {...props} />)

describe('Post defaultProps' , () => {
    it('should use default likePost' , () => {
        const result = Post.defaultProps.likePost()
        expect(result).toBe(undefined);
    });
})

describe('Post click' , () => {
    let wrapper, mockFunc
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    beforeEach(() => {
        useSelectorMock.mockReturnValue({ auth: {authData: null} }) 
        mockFunc = jest.fn()
        wrapper = setUp({dispatch: mockFunc});

    })
    afterEach(() => {
        useSelectorMock.mockClear()
    })
    it('should be one click' , () => {
        const likeButton = wrapper.find('.post__like')
        likeButton.simulate('click')
        const clickCount = mockFunc.mock.calls.length
        expect(clickCount).toBe(1);
    });
})