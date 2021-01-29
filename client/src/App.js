import React from 'react'
import './app.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PostsContainer from './components/BlogPage/PostsContainer'
import { AboutPage } from './components/AboutPage'
import { SkillsPage } from './components/SkillsPage'
import { ExpriencePage } from './components/ExpriencePage'
import { EducationPage } from './components/EducationPage'
import { ContactPage } from './components/ContactPage'
import { AuthPage } from './components/AuthPage'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact component={AboutPage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/skills" exact component={SkillsPage} />
                <Route path="/experience" exact component={ExpriencePage} />
                <Route path="/education" exact component={EducationPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/posts" component={PostsContainer} />
                <Route path="/auth" component={AuthPage} />
            </Switch>
        </Router>
    )
}

export default App
