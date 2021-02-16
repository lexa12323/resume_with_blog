import React from 'react'
import { Page } from  '../views/Page/Page'
import { Signature } from '../views/Signature/Signature'
import { Layout } from '../views/Layout/Layout'

export const SkillsPage = () => {
    const title = 'My Skills';
    const subtitle = 'Experience Skill';
    const description = '';
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <p>Язики програмирования: </p>
                <p>1) Javascript(react, redux, vue(компоненты), mongoose, express, nodejs)</p>
                <p>2) PHP(laravel, популярные CMS: wordpress, dle, opencart, modx)</p>
                
                <p>Работа с react + redux,</p>
                <p>Разработка Single page application</p>
                <p></p>
                <p>Способность к самообучению</p>
                <p>Следование принципам: SOLID, DRY, DIE, KISS, YAGNI.</p>
                <p>Webpack, gulp, SASS, БЭМ</p>
                <p>Умение работать в команде. Разработка по методологии: Scrum, Kanban, Waterfall</p>
                <p>CI/CD: Bitbucket, Gitlab, Teamcity</p>
                <p>Базы данных: Mongodb, PostgreSql, Mysql</p>
                <p>Работа с макетами: Photoshop, Avocode, Figma</p>
                <p>Система контроля версий: git(в командной строке и в графическом интерфейсе GitKraken), mercurial(в командной строке и в графическом интерфейсе tortoise hg)</p>
                <p>Системы трекинга: Redmine, Bitrix24 + Tmetric.</p>
                <p>Виртуальные машины: VirtualBox, Vmware, browserstack(онлайн)</p>
                <p>Операционные системы: Linux (дистрибутив Ubuntu), Windows</p>
                <p>Языки: украинский, русский, английский(достаточный для чтения технической документации и понимания речи, но недостаточный для разговора)</p>
                <Signature />
            </Page>
        </Layout>
    )
}
