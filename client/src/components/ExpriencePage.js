import React from 'react'
import { Page } from  '../views/Page/Page'
import { ExprienceList } from '../views/Exprience/Exprience'
import { yearsDiff } from '../helpers/yearsDiff'
import { exprience } from '../mock/exprience'
import { Layout } from '../views/Layout/Layout'
import { experienceBeginDate } from '../constants/common'

export const ExpriencePage = () => {

    const title = 'My Exprience';
    const years = yearsDiff(experienceBeginDate, new Date())
    const subtitle = `${years} Years Exprience`;
    const description = '';
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <ExprienceList exprience={exprience}/>
            </Page>
        </Layout>
    )
}
