import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { logout  } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import './navbar.scss'

const Burger = ({setOpened, opened}) => {
    return (
        <div className={`burger ${opened && 'burger-opened'}`} onClick={() => setOpened(!opened)}>
            <div />
            <div />
            <div />
        </div>
    )
}

export const Navbar = ({list}) => {
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [opened, setOpened] = useState(false)

    return (
        <div className="navbar">
            <Burger  opened={opened} setOpened={setOpened}/>
            <ul className={`navbar__list ${opened && 'navbar__list-opened'}`}>
                {list.map((item, i) => 
                    <li key={i} className="navbar__item">
                        <NavLink to={item.href} exact={true} className="navbar__link" activeClassName='navbar__link-active'>
                            {item.name}
                        </NavLink>
                    </li>
                )}
            
                { user.authData && (
                    <div>
                        <div>Logged {user?.authData?.result?.email}</div>
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    </div>
                ) /*: (
                    <Link to="/auth" className="navbar__link">Login</Link> 
                )*/}
            </ul>
        </div>
    )
}
