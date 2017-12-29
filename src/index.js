import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {BrowserRouter} from 'react-router-dom'
import './assets/css/index.css'

//Main application
ReactDOM.render(
    <BrowserRouter>
        <App title="Readings Management"/>
    </BrowserRouter>
    , document.getElementById('root')
)
