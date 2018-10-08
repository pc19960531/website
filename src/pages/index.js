import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Home from '../component/home'

export default class Pages extends Component {
    render() {
        return (
            <Switch key="content">
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
            </Switch>
        )
    }
}