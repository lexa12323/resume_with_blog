import React from 'react'
import { Link } from 'react-router-dom'
import './logo.scss'
//import logo from '../../assets/img/logo.png';

export const Logo = ({modificator}) => {

    return (
        <Link className="logo-link" to='/'>
            <div className={`logo ${modificator}`}>
                <img className="logo__img" src='/images/logo3.JPG' alt="logo"/>
                <div className="logo__text">Oleksii Horbenko</div>
            </div>
        </Link>
    )
}
