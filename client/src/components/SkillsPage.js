import React from 'react'
import { Page } from  '../views/Page/Page'
import { Signature } from '../views/Signature/Signature'
import { Layout } from '../views/Layout/Layout'

export const SkillsPage = () => {
    const title = 'My Skills';
    const subtitle = 'Experience Skill';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.';
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <Signature />
            </Page>
        </Layout>
    )
}
