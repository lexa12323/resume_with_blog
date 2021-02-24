import React from 'react'
import { Page } from  '../views/Page/Page'
import { EducationList } from '../views/Education/Education'
import { education } from '../mock/education'
import { Layout } from '../views/Layout/Layout'

export const EducationPage = () => {

    const title = 'Education';
    const subtitle = `Just My Educational Background`;
    const description = '';
    
    return (
        <Layout darken>
            <Page title={title} subtitle={subtitle} description={description} darken>
                <EducationList education={education}/>
            </Page>
        </Layout>
    )
}
