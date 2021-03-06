import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from "react-dom"
import React from "react"
//component files
import TodoContainer from './components/TodoContainer'

//stylesheet
import './components/App.css'

ReactDOM.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <TodoContainer />
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
)
