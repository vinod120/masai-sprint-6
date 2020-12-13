import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Login from '../Components/Login'
import SingleResturant from '../Components/SingleResturant'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact render={()=><Login />} />
                    <Route path='/dashboard' exact render={()=><Dashboard />} />
                    <Route path = '/dashboard/:id' exact render={(props)=><SingleResturant {...props}/>} />
                </Switch>
            </div>
        )
    }
}