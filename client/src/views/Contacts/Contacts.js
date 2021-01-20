import React from 'react'
import './contacts.scss'

export const Contacts = ({list}) => {
    return (
        <ul className="contacts">
            { list.map((item) => <Contact {...item}/>) }
        </ul>
    )
}

export const Contact = ({icon, title, text}) => {
    return (
        <li className="contacts__item">
            {/*<div className="contacts__icon">{icon}</div>*/}
            <div className="contacts__data">
                <div className="contacts__title">{title}</div>
                <div className="contacts__text">{text}</div>
            </div>
        </li>
    )
}
