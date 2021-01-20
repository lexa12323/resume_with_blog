import React from 'react'
import './page.scss'



export const Page = ({title, subtitle, description, children, darken}) => {
    return (
        <div className="page">
                <h1 className="page__title page__title-nobottom">{title}</h1>
                <h2 className="page__subtitle">{subtitle}</h2>
                <p className="page__description">{description}</p>
                {children}
        </div>
    )
}
