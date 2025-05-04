import { Login } from '@mui/icons-material'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    console.log(children)
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    return isLoggedIn?children:<Navigate to="/login"/>
  
}

export default PrivateRoute