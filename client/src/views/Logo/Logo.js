import React from 'react'
import './logo.scss'
import logo from '../../assets/img/logo.png';

export const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo"/>
            <div className="logo__text">Oleksii Gorbenko</div>
        </div>
    )
}
