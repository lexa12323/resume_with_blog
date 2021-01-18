import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export const Navbar = ({list}) => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                {list.map((item, i) => 
                    <li key={i} className="navbar__item">
                        <Link to={item.href} className="navbar__link">{item.name}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
