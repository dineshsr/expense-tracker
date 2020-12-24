import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const isAuthenticated = () => {
//localStorage.getItem("token")
//TODO 
    return true
}

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render = {
            props => isAuthenticated()?
            <Component {...props}/>:<Redirect to={{pathname:'/login', state:{from:props.location}}}/>
        }/>
    );
}