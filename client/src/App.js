import React from 'react'
import './app.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Layout } from './views/Layout/Layout'
import PostsContainer from './components/Posts/PostsContainer'
import { AboutPage } from './components/AboutPage'
import { SkillsPage } from './components/SkillsPage'
import { ExpriencePage } from './components/ExpriencePage'
import { EducationPage } from './components/EducationPage'

const App = () => {
    return(
        <Router>
            <Layout>
                <Switch>
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/skills" exact component={SkillsPage} />
                    <Route path="/experience" exact component={ExpriencePage} />
                    <Route path="/education" exact component={EducationPage} />
                    <Route path="/posts" component={PostsContainer} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default App
