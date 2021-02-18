import Skills from '../models/skills.model.js'

export const getSkills = async (req, res) => {
    
    try {
        const skills = await Skills.findOne()
        res.status(200).json(skills)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const create = async (req, res) => {
    
    const { body } = req;

    const skills = await Skills.find();
    console.log(skills, skills.length)
    if (skills.length){
        return res.status(409).json({message: 'Single type. Skills already exists. Only update awailable'})
    }
    const skill = new Skills({...body})

    try {
        await skill.save()
        return res.status(201).json(skill)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

/*
{
    "title": "sdfsdfsdfs",
    "icons": ["html5", "docker", "webpack", "gulp", "javascript", "sass", "react", "redux", "node-dot-js", "mongodb", "php", "postgresql", "mysql", "bitbucket", "gitlab", "postman", "swagger", "figma", "git", "linux", "windows"],
    "content": "<p>Опыт - 9 лет разработки веб приложений.</p><p>Язики програмирования: </p><ol><li>Javascript (react, redux, vue(компоненты), mongoose, express, nodejs)</li><li>PHP (laravel, популярные CMS: wordpress, dle, opencart, modx)</li></ol><p><b>Следование принципам:</b> SOLID, DRY, DIE, KISS, YAGNI.</p><p><b>Сборка проектов:</b> Webpack, gulp</p><p><b>Стилизация проектов:</b> CSS, SASS, БЭМ, Styled components</p><p><b>Single page application:</b> React + Redux. Немного Next.js</p><p>Умение работать в команде. Разработка по методологии: Agile (Scrum, Kanban), Waterfall</p><p><b>CI/CD:</b> Bitbucket, Gitlab, Teamcity</p><p><b>Базы данных:</b> Mongodb, PostgreSQL, MySQL</p><p><b>Api:</b> Postman, Swagger</p><p><b>Работа с макетами:</b> Photoshop, Avocode, Figma</p><p><b>Системы контроля версий:</b> Git (в командной строке и в графическом интерфейсе GitKraken), Mercurial (в командной строке и в графическом интерфейсе tortoise hg)</p><p><b>Системы трекинга:</b> Redmine, Bitrix24 + Tmetric.</p><p><b>Виртуальные машины:</b> VirtualBox, Vmware, Browserstack(онлайн)</p><p><b>Развёртывания и управления приложениями:</b> Docker</p><p><b>IDE:</b> VS Code</p><p><b>Операционные системы:</b> Linux (дистрибутив Ubuntu), Windows</p><p><b>Языки:</b> украинский, русский, английский (достаточный для чтения технической документации и понимания речи, но недостаточный для разговора)</p><p>Способность к самообучению</p>"
}
*/