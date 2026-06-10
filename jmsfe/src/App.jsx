import { useState } from 'react'
import Appfr from './Appfr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './NavBar'
import CreateJob from './pages/CreateJob'

function App() {

  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />{"  "}
          <Route path="/login" element={<Login />} />{"  "}
          <Route path="/register" element={<Register />} />{"  "}
          <Route path="/createjob" element={<CreateJob/>}></Route>
        </Routes>
      
    </>
  )
}

export default App
