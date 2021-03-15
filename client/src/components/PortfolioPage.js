import React from 'react'

import { Page } from  '../views/Page/Page'
import { Layout } from '../views/Layout/Layout'
import { PortfolioList } from '../views/Portfolio/Portfolio'


const data = [
    {image: 'gorbenko_resume.png', name: 'Сайт, на котором вы находитесь', description: 'Стек технологий: MERN (mongoDB, ExpressJS, React, NodeJS). Фронтенд: React в связке с Redux. Бекенд: NodeJS CRUD App.'},
    {image: 'private.png', name: 'Конфиденциальные проекты', description: 'Разработка фронтенд части проектов на стеке React + Redux(который заменили на effector). Использование методологии atomic design, styled components для стилизации. Приватный npm регстр (nexus). Пакетный менеджер lerna. SSE, Websocket.'},
    {image: 'lovelama.png', name: 'LoveLama', link: 'https://lovelama.ru', description: 'Разработка только фронтенд части. Клиент отказался от разработки SPA, поэтому использовался нативный JS c библиотекой jQuery. Для отрисовки фронта использовался pug. Чат между юзерами реализован на Vue.js (компоненты) и websocket.io'},
    {image: 'addslots.png', name: 'Addslots', description: 'Сайт разработан на PHP фреймворке Laravel (как видимимая пользователю часть так и CMS). Для отрисовки фронтенда использовался pug. На сервере использовался ffmpeg для обработки загружаемых видеофайлов. Были попытки использвать Amazon web services(S3, elastic transcoder), но позже отказались от идеи из-за цены. Пока не запущен и поставлен на паузу.'},
    {image: 'joypup.png', name: 'Joy Pup', link: 'https://joy-pup.com/en/', description: 'Сайт разработан на CMS Wordpress + нативный Javascript на фронте. Сборка фронтенда: webpack, gulp. Для проекта написаны собственные плагины.'},
    {image: 'monolit.png', name: 'Monolit', link: 'https://nsk-monolit.ru/', description: 'Сайт разработан на CMS Wordpress. Сборка фронтенда: gulp'},
    {image: 'osn6.png', name: 'ОСН 6', link: 'https://osn-group.ru/', description: 'Сайт разработан на CMS Wordpress. Сборка фронтенда: gulp'},
    {image: 'simprint.png', name: 'Simprint', link: 'https://simprint.com.ua/', description: 'Сайт разработан на PHP фреймворке Laravel (как видимимая пользователю часть так и CMS). Для отрисовки фронтенда использовался pug.'},
    {image: 'inforoom.png', name: 'Іnfo room', link: 'https://inforoom.com.ua/', description: 'Сайт разработан на CMS Wordpress. Сборка фронтенда: gulp'},
    {image: 'siteup.png', name: 'Siteup', description: 'Сайт разработан на PHP фреймворке Laravel (как видимимая пользователю часть так и CMS). Для отрисовки фронтенда использовался pug. Использовался React для разработки отдельных компонентов (форма обратной связи с телеграм ботом для уведомления в Telegram)'},
    {image: 'blankgun.png', name: 'Blankgun', description: 'Сайт разработан на CMS Wordpress + Woocommerce. Бюджетный проект, поэтому использует готовую тему и плагины'},
]

export const PortfolioPage = () => {
    const title = 'Projects';
    const subtitle = ``;
    const description = 'Тут находятся проекты, которые можно здесь публиковать. Еще есть много проектов, которые нельзя опубликовать в связи с политикой компаний (код таких проектов находитсяв приватном репозиторие). Также не указывал проекты, в которых дорабатывал функционал, но не учавствовал в "разработке с нуля"';
    return (
        <Layout>
            <Page title={title} subtitle={subtitle} description={description}>
                <PortfolioList list={data}/>
            </Page>
        </Layout>
    )
}
