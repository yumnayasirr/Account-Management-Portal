import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='dashboard-container'>
      <h1 className="title">Admin Dashboard</h1>
      <div className="dashboard-element-container">
      <div className="dashboard-element">
        <h2>Employees</h2>
      </div>
      <div className="dashboard-element">
        <h2>Evaluations</h2>
      </div>
      <div className="dashboard-element">
        <h2>Attendance</h2>
      </div>
      <div className="dashboard-element">
        <h2>Payments</h2>
      </div>
      </div>
    </div>
  )
}

export default AdminDashboard