import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import EmpDashboard from './pages/employee/EmpDashboard';
import EmpList from './pages/admin/EmpList';
import EmpEvaluation from './pages/EmpEvaluation';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/" element={<EmpList />} /> */}
        <Route path="/" element={<EmpEvaluation />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/empDashboard" element={<EmpDashboard />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App