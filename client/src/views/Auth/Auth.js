import React, {useState} from 'react'
import { Input } from '../Input/Input'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'

const initialState = {email: '', password: ''}

export const Auth = ({}) => {
    
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if (isSignup){
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    
    //dispatch({ type: "AUTH", data: {result, token } })

    return (
        <div>
            ddd
            <form onSubmit={handleSubmit}>
                <Input handleChange={handleChange} name='email' type='text' />
                <Input handleChange={handleChange} name='password' type='text' />
                <button type="submit">{isSignup ? 'Sign up' : 'Sign in'}</button>
                <button type="button" onClick={()=> setIsSignup(!isSignup)}>Switch</button>
            </form>
        </div>
    )
}
