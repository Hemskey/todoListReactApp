import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from "react-dom"
import React from "react"
//component files
import TodoContainer from './functionBased/TodoContainer'

//stylesheet
import './functionBased/App.css'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
)