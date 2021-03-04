import { shallow } from 'enzyme';
import React from 'react'
import * as reactRedux from 'react-redux'
import { Navbar } from '../Navbar'

const setUp = (props) => shallow(<Navbar {...props} />)

describe('Post defaultProps' , () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    let component;
    let instance;

    beforeEach(() => {
        useSelectorMock.mockReturnValue({ auth: {authData: null} }) 
        component = setUp({list: [{name: 'Home', href: '/'}, {name: 'Skills', href: '/skills'}]})
        instance = component.instance()
    })

    afterEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    })

    it('should use default likePost' , () => {
        
        //component = setUp({list: [{name: 'Home', href: '/'}, {name: 'Skills', href: '/skills'}]})
        //component.toMatchSnapshot()
        //expect(component).toMatchSnapshot();
        //instance = component.instance()
        //console.log('df', instance)
        expect(instance).toBe(null); 
        //expect(instance.state().opened).toBe(1);*/
    });
})