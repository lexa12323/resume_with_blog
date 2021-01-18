import React from 'react'
import { Content } from '../Content/Content'
import './page.scss'



export const Page = ({title, subtitle, description, children}) => {
    return (
        <div className="page">
            <Content>
                <h1 className="page__title page__title-nobottom">{title}</h1>
                <h2 className="page__subtitle">{subtitle}</h2>
                <p className="page__description">{description}</p>
                {children}
            </Content>
        </div>
    )
}
