import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Pages from './pages'
import { Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'

class App extends Component {
    render() {
        return (
            <Router>
                <Pages />
            </Router>
        )
        // <Pages />
    }
}

export default hot(module)(App)