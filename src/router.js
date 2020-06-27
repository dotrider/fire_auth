import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';

export default (
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/login'componento={Login}/>
        <Route path='/signup' component={Signup}/>
    </Switch>
)