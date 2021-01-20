import React from 'react'
import './content.scss'

export const Content = ({ children, darken }) => {
    const modificator = darken ? 'container-darken' : '';
    return (
        <div className={`container ${modificator}`}>
            <div className="container__wrapper">
                { children }
            </div>
        </div>
    )
}
