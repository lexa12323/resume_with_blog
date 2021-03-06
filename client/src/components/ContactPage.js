import React from 'react'
import { Page } from  '../views/Page/Page'
import { Layout } from '../views/Layout/Layout'
import { Contacts } from '../views/Contacts/Contacts'

import { contacts } from '../mock/contacts'

export const ContactPage = () => {
    const title = 'Contact Me';
    const subtitle = 'Lets Keep In Touch';
    const description = '';
    return (
        <Layout darken>
            <Page title={title} subtitle={subtitle} description={description}>
                <Contacts list={contacts}/>
            </Page>
        </Layout>
    )
}
