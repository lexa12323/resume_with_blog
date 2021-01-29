import React from 'react'
import { Page } from  '../views/Page/Page'
import { Layout } from '../views/Layout/Layout'
import { Auth } from '../views/Auth/Auth'


export const AuthPage = () => {
    return (
        <Layout>
            <Page>

                <Auth />
            </Page>
        </Layout>
    )
}
