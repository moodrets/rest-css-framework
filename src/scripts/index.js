import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

// styles
import '../styles/main.scss'

// App
import App from './App.js'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('framework-app')
)
