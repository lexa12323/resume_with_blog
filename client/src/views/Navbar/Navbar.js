import React from 'react'
import { Link } from 'react-router-dom'
import {  logout  } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import './navbar.scss'

export const Navbar = ({list}) => {
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <ul className="navbar__list">
                {list.map((item, i) => 
                    <li key={i} className="navbar__item">
                        <Link to={item.href} className="navbar__link">{item.name}</Link>
                    </li>
                )}
            
                {/* user.authData ? (
                    <div>
                        <div>Logged {user?.authData?.result?.email}</div>
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </div>
                ) : (
                    <Link to="/auth" className="navbar__link">Login</Link>
                )*/}
            </ul>
        </div>
    )
}
