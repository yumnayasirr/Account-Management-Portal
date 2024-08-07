import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import EmpDashboard from './pages/employee/EmpDashboard';
import EmpList from './pages/admin/EmpList';
import EmpEvaluation from './pages/EmpEvaluation';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Account from './pages/employee/Account';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        {/* <Route path="/" element={<LandingPage/>} /> */}
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<EmpList />} /> */}
        <Route path="/empEvaluation" element={<EmpEvaluation />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/empDashboard" element={<EmpDashboard />} />
        <Route path="/account" element={<Account/>} />
      </Routes>
      <ToastContainer />
    </Router>  
    </Provider>
  )
}

export default App