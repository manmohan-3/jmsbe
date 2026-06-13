import { useState } from 'react'
import Appfr from './Appfr'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/RecruiterLogin'
import Register from './pages/Register'
import NavBar from './NavBar'
import CreateJob from './pages/CreateJob'
import ProtectedforCreate from './ProtectedforCreate'
import CandidateLogin from './pages/CandidateLogin'
import CandidateRegister from './pages/CandidateREgister'
import Applications from './pages/Applications'
import MyApplications from './pages/MyApplications'

function App() {

  return (
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />{"  "}
          <Route path="/login" element={<Login />} />{"  "}
          <Route path="/register" element={<Register />} />{"  "}
          <Route path="/createjob" element={<ProtectedforCreate><CreateJob/></ProtectedforCreate>}></Route>
          <Route path='/candidate/register' element={<CandidateRegister/>}></Route>
          <Route path='/candidate/login' element={<CandidateLogin/>}></Route>
          <Route path='/applications' element={<Applications/>}></Route>
          <Route path='/myapplications' element={<MyApplications/>}>My Applications</Route>
        </Routes>
      
    </>
  )
}

export default App
