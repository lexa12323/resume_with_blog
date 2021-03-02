import React, {useEffect, useState, useCallback} from 'react'
import { Page } from  '../views/Page/Page'
import { Layout } from '../views/Layout/Layout'
import { Skills } from '../views/Skills/Skills'
import { Loader } from '../views/Loader/Loader'
import { fetchSkills } from '../api/index'
import { useRequest } from '../hooks/useRequest'

/*const html = ` <p>Опыт - 9 лет разработки веб приложений.</p>
<p>Язики програмирования: </p>
<ol>
<li>Javascript (react, redux, vue(компоненты), mongoose, express, nodejs)</li>
<li>PHP (laravel, популярные CMS: wordpress, dle, opencart, modx)</li>
</ol>

<p><b>Следование принципам:</b> SOLID, DRY, DIE, KISS, YAGNI.</p>
<p><b>Сборка проектов:</b> Webpack, gulp</p>
<p><b>Стилизация проектов:</b> CSS, SASS, БЭМ, Styled components</p>
<p><b>Single page application:</b> React + Redux. Немного Next.js</p>
<p>Умение работать в команде. Разработка по методологии: Agile (Scrum, Kanban), Waterfall</p>
<p><b>CI/CD:</b> Bitbucket, Gitlab, Teamcity</p>
<p><b>Базы данных:</b> Mongodb, PostgreSQL, MySQL</p>
<p><b>Api:</b> Postman, Swagger</p>
<p><b>Работа с макетами:</b> Photoshop, Avocode, Figma</p>
<p><b>Системы контроля версий:</b> Git (в командной строке и в графическом интерфейсе GitKraken), Mercurial (в командной строке и в графическом интерфейсе tortoise hg)</p>
<p><b>Системы трекинга:</b> Redmine, Bitrix24 + Tmetric.</p>
<p><b>Виртуальные машины:</b> VirtualBox, Vmware, Browserstack(онлайн)</p>
<p><b>Развёртывания и управления приложениями:</b> Docker</p>
<p><b>Операционные системы:</b> Linux (дистрибутив Ubuntu), Windows</p>
<p><b>Языки:</b> украинский, русский, английский (достаточный для чтения технической документации и понимания речи, но недостаточный для разговора)</p>
<p><b>IDE:</b> VS Code</p>
<p>Способность к самообучению</p>`;*/

//const iconList = ['html5', 'docker', 'webpack', 'gulp', 'javascript', 'sass', 'react', 'redux', 'node-dot-js', 'mongodb', 'php', 'postgresql', 'mysql', 'bitbucket', 'gitlab'/*, 'teamcity'*/, 'postman', 'swagger', /*'photoshop', 'avocode', */'figma', 'git', /*'mercurial', 'redmine', 'virtualbox',*/ 'linux', 'windows']

export const SkillsPage = () => {

    const { data, loaded, error } = useRequest(
        useCallback(() => fetchSkills(), [])
    )

    const {title, subtitle, description, icons, content} = data
    
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <Loader loading={loaded} error={error}>
                    <Skills html={content} icons={icons}/>
                </Loader>
            </Page>
        </Layout>
    )
}
