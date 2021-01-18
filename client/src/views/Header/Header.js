import React from 'react'
import './header.scss'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { headerMenu } from '../../mock/menu'


export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Logo modificator="header__logo"/>
                <Navbar list={headerMenu}/>
            </div>
        </header>
    )
}
