import React from 'react'
import { Page } from  '../views/Page/Page'
import { Signature } from '../views/Signature/Signature'
import { Layout } from '../views/Layout/Layout'
import { yearsDiff } from '../helpers/yearsDiff'
import { experienceBeginDate, bitrhdate } from '../constants/common'
import { Achievements } from '../views/Achievements/Achievements'

export const AboutPage = () => {
    const expiriance = yearsDiff(experienceBeginDate, new Date())
    const age = yearsDiff(bitrhdate, new Date())

    const title = 'Oleksii Horbenko';
    const subtitle = 'Web Developer';
    const description = `Я специализируюсь на web-разработке, опыт работы в этой сфере ${expiriance} лет. Мой возраст ${age} лет. Имею высшее образование. Web-технологии давно стали частью моей жизни, мне нравится заниматься своим делом, нравится работа и проекты, которые я создаю.`;
    //const tmp = [{count: 33, name: 'Projects completed'},{count: 18, name: 'Winning Awards'},{count: 225, name: 'Happy Clients'},{count: 19, name: 'Running Project'}]
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <Signature />
                <address className="address page__address">
                    <p className="address__item"><b>Nick Name:</b> Oleksii Horbenko</p>
                    <p className="address__item"><b>Email:</b> alexey.horbenko@gmail.com</p>
                    <p className="address__item"><b>Phone:</b> +380937936695</p>
                    <p className="address__item"><b>Date of Birth:</b> Feb 12, 1991</p>
                    <p className="address__item"><b>Address:</b> Ukraine, Cherkasy</p>
                </address>
                {/*<Achievements list={tmp}/>*/}
            </Page>
        </Layout>
    )
}
