import React from 'react'
import './education.scss'

export const Education = ({img, title, subtitle, text}) => {
    return (
        <div className="education__item">
            <img className="education__image" src={img} alt="logo"/>
            <div className="education__info">
                <div className="education__title">
                    {title}
                </div>
                <div className="education__subtitle">ПЗАС</div>
                <div className="education__subtitle">
                    {subtitle}
                </div>
                
                <div className="education__text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export const EducationList = ({education}) => {
    return (
        <div className="education">
            { education.map((item) => <Education {...item}/>) }
        </div>
    )
}
