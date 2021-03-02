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
                        <a href="https://www.facebook.com/profile.php?id=100008143963740">
                            <BrandIcon name='facebook' className="contacts__social"/>
                        </a>
                        <a href="https://linkedin.com/in/oleksii-gorbenko-09a426208">
                            <BrandIcon name='linkedin' className="contacts__social"/>
                        </a>
                        <a href="tg://resolve?domain=@AlexeyGorbenko">
                            <BrandIcon name='telegram' className="contacts__social"/>
                        </a>
                        <a href="viber://chat?number=+380937936695">
                            <BrandIcon name='viber' className="contacts__social"/>
                        </a>
                        <a href="skype:+buster376?call">
                            <BrandIcon name='skype' className="contacts__social"/>
                        </a>
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
