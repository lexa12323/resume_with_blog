import React from 'react'
import './logo.scss'
//import logo from '../../assets/img/logo.png';

export const Logo = ({modificator}) => {

    return (
        <div className={`logo ${modificator}`}>
            <img className="logo__img" src='/images/logo_ex2.png' alt="logo"/>
            <div className="logo__text">Oleksii Gorbenko</div>
        </div>
    )
}
