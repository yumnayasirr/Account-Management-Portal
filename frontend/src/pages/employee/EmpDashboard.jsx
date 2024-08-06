import React from 'react'
import { useNavigate } from 'react-router-dom';

const EmpDashboard = () => {

  const navigate = useNavigate();

const onclickHandler = (path, e) => {
    e.preventDefault();
    //console.log('Clicked on:', path);

    if(path === "account"){
        navigate('/account');
    }
    else if(path === "eval"){
        navigate('/empEvaluation');
    }
    else if(path === "attendance"){
        navigate('/attendance');
    }
    else if(path === "salary"){
        navigate('/salary');
    }
  }

  return (
    <div className='dashboard-container'>
      <h1 className="title">Employee Dashboard</h1>
      <div className="dashboard-element-container">
      <div className="dashboard-element" onClick={(e)=>{onclickHandler("account", e)}}>
        <h2>Account Information</h2>
      </div>
      <div className="dashboard-element" onClick={(e)=>{onclickHandler("eval", e)}}>
        <h2>Evaluations</h2>
      </div>
      <div className="dashboard-element" onClick={(e)=>{onclickHandler("attendance", e)}}>
        <h2>Attendance</h2>
      </div>
      <div className="dashboard-element" onClick={(e)=>{onclickHandler("salary", e)}}>
        <h2>Salary History</h2>
      </div>
      </div>
    </div>
  )
}

export default EmpDashboard