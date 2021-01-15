import React from 'react'
import './header.scss'
import { Logo } from '../Logo/Logo'

export const Header = () => {
    return (
        <header className="header">
            <div class="header__container">
                <Logo />
            </div>
        </header>
    )
}
