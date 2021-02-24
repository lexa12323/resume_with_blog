import React from 'react'
import './exprience.scss'


export const Exprience = ({img, title, subtitle, text, role}) => {
    return (
        <div className="exprience__item">
            <img className="exprience__image" src={img} alt="logo"/>
            <div className="exprience__info">
                <div className="exprience__title">
                    {title}
                </div>
                <div className="exprience__subtitle">
                    {subtitle}
                </div>
                <div className="exprience__text">
                    {role}
                </div>
                <div className="exprience__text">
                    {text}
                </div>
                
            </div>
        </div>
    )
}

export const ExprienceList = ({exprience}) => {
    return (
        <div className="exprience">
            { exprience.map((item) => <Exprience {...item}/>) }
        </div>
    )
}

