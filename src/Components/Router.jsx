import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './authentication/Register'
import Login from './authentication/Login'
import Home from './users/Home'
import PrivateRoute from './authentication/PrivateRoute'
const Router = () => {
  return (
    <Routes>
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>}/>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        />
      </Routes>

  )
}

export default Router