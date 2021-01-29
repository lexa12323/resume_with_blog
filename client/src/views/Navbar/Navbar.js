import React, {useEffect} from 'react'
import decode from 'jwt-decode'
import { Link, useLocation } from 'react-router-dom'
import {  logout  } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import './navbar.scss'

export const Navbar = ({list}) => {
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(()=> {
        const token = user?.authData?.token
        if(token){
            try {
                const decodedToken = decode(token)
                if(decodedToken.exp * 1000 < new Date().getTime()){
                    dispatch(logout())
                }
                
            } catch (error) {
                dispatch(logout())
            }
        }
    }, [location, dispatch, user])
    return (
        <div className="navbar">
            <ul className="navbar__list">
                {list.map((item, i) => 
                    <li key={i} className="navbar__item">
                        <Link to={item.href} className="navbar__link">{item.name}</Link>
                    </li>
                )}
            </ul>
            { user.authData ? (
                <div>
                    <div>Logged {user?.authData?.result?.email}</div>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </div>
            ) : (
                <Link to="/auth">Login</Link>
            )}
        </div>
    )
}
