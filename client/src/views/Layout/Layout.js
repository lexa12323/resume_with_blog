import React from 'react'
import { Header } from '../Header/Header'
import { Content } from '../Content/Content'
import { Footer } from '../Footer/Footer'

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <Content>
                { children } 
            </Content>
            <Footer />
        </div>
    )
}
