import React from 'react'
import './contacts.scss'
import { Icon, BrandIcon } from '../common/Icon/Icon';

export const Contacts = ({list}) => {
    return (
        <ul className="contacts">
            { list.map((item, index) => <Contact key={index} {...item}/>) }
            <li className="contacts__item">
                {<div className="contacts__icon"><Icon className='contacts__svg' size={30} name='social'/></div>}
                <div className="contacts__data">
                    <div className="contacts__title">Other contacts</div>
                    <div className="contacts__text">
                        <BrandIcon name='facebook' className="contacts__social"/>
                        <BrandIcon name='linkedin' className="contacts__social"/>
                        <BrandIcon name='instagram' className="contacts__social"/>
                        <BrandIcon name='telegram' className="contacts__social"/>
                        <BrandIcon name='viber' className="contacts__social"/>
                        <BrandIcon name='skype' className="contacts__social"/>
                        <BrandIcon name='twitter' className="contacts__social"/>
                        <a href="https://github.com/lexa12323" target="_blank">
                            <BrandIcon name='github' className="contacts__social"/>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export const Contact = ({icon, title, text}) => {
    return (
        <li className="contacts__item">
            {<div className="contacts__icon"><Icon className='contacts__svg' size={30} name={icon}/></div>}
            <div className="contacts__data">
                <div className="contacts__title">{title}</div>
                <div className="contacts__text">{text}</div>
            </div>
        </li>
    )
}
