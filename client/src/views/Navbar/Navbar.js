import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './navbar.scss'

export const Navbar = ({list}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({type: "LOGOUT"});
        setUser(null)
    }
    return (
        <div className="navbar">
            <ul className="navbar__list">
                {list.map((item, i) => 
                    <li key={i} className="navbar__item">
                        <Link to={item.href} className="navbar__link">{item.name}</Link>
                    </li>
                )}
            </ul>
            { user ? (
                <div>
                    <div>Logged {user?.result?.email}</div>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            ) : (
                <Link to="/auth">Login</Link>
            )}
        </div>
    )
}
