import React from 'react'
import { Header } from '../Header/Header'
import { Content } from '../Content/Content'
import { Footer } from '../Footer/Footer'

export const Layout = ({children, darken}) => {
    return (
        <div>
            <Header />
                <Content darken={darken}>
                    { children } 
                </Content>
            <Footer />
        </div>
    )
}
