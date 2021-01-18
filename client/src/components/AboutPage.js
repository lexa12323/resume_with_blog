import React from 'react'
import { Page } from  '../views/Page/Page'
import { Signature } from '../views/Signature/Signature'
import { Achievements } from '../views/Achievements/Achievements'

export const AboutPage = () => {
    const title = 'Oleksii Gorbenko';
    const subtitle = 'Web Developer';
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const tmp = [{count: 33, name: 'Projects completed'},{count: 18, name: 'Winning Awards'},{count: 225, name: 'Happy Clients'},{count: 19, name: 'Running Project'}]
    return (
        <Page title={title} subtitle={subtitle} description={description}>
            <Signature />
            <address className="address page__address">
                <p className="address__item"><b>Nick Name:</b> Oleksii Gorbenko</p>
                <p className="address__item"><b>Email:</b> alexey.horbenko@gmail.com</p>
                <p className="address__item"><b>Phone:</b> +380937936695</p>
                <p className="address__item"><b>Date of Birth:</b> Feb 12, 1991</p>
                <p className="address__item"><b>Address:</b> Ukraine, Cherkasy</p>
            </address>
            <Achievements list={tmp}/>
        </Page>
    )
}
