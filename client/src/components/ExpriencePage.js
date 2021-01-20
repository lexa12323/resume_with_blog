import React from 'react'
import { Page } from  '../views/Page/Page'
import { ExprienceList } from '../views/Exprience/Exprience'
import { yearsDiff } from '../helpers/yearsDiff'
import { exprience } from '../mock/exprience'
import { Layout } from '../views/Layout/Layout'

export const ExpriencePage = () => {

    const title = 'My Exprience';
    const years = yearsDiff('2012-02-10', new Date())
    const subtitle = `${years} Years Exprience`;
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <ExprienceList exprience={exprience}/>
            </Page>
        </Layout>
    )
}
