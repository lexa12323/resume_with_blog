import React from 'react'
import { Layout } from '../views/Layout/Layout'
import '../views/Page/page404.scss'

export const Page404 = () => {
    return (
        <Layout>
            <div className="page404">
                <div className="page404__title">404</div>
                <div className="page404__subtitle">Oops! That page can’t be found.</div>
                <div className="page404__description">It looks like you are lost somewhere. Maybe try going back to homepage?</div>
            </div>
        </Layout>
    )
}
