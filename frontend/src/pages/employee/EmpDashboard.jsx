import React from 'react'

const EmpDashboard = () => {
  return (
    <div className='dashboard-container'>
      <h1 className="title">Employee Dashboard</h1>
      <div className="dashboard-element-container">
      <div className="dashboard-element">
        <h2>Account Information</h2>
      </div>
      <div className="dashboard-element">
        <h2>Evaluations</h2>
      </div>
      <div className="dashboard-element">
        <h2>Attendance</h2>
      </div>
      <div className="dashboard-element">
        <h2>Salary History</h2>
      </div>
      </div>
    </div>
  )
}

export default EmpDashboard