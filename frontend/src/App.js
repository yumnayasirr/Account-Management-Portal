import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmpDashboard from './pages/EmpDashboard';
import EmpList from './pages/EmpList';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<EmpList />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/empDashboard" element={<EmpDashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App