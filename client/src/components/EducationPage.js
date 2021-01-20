import React from 'react'
import { Page } from  '../views/Page/Page'
import { EducationList } from '../views/Education/Education'
import { education } from '../mock/education'
import { Layout } from '../views/Layout/Layout'

export const EducationPage = () => {

    const title = 'Education';
    const subtitle = `Just My Educational Background`;
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    
    return (
        <Layout darken>
            <Page title={title} subtitle={subtitle} description={description} darken>
                <EducationList education={education}/>
            </Page>
        </Layout>
    )
}
