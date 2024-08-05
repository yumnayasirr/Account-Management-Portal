import React, { useState, useEffect } from 'react';
import {fetchEmployees} from '../../features/employees/employeeService';
import { useNavigate } from 'react-router-dom';

const EmpList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await fetchEmployees();
        
        setEmployees(response);
        
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    getEmployees();
  }, []);

  //Onclick will open specific employee evaluation details
  const onclick = (empID, event) => {
    event.preventDefault();
    console.log('Employee Clicked: ' + empID );
    //navigate(`/empEvaluation/${empID}`);
  };

  return (
    <div>
      <div className="emp-title-container">
        <h2 className='title'>Employee List</h2>
        <input type="text" placeholder="Search Employee" className="search-emp" />
      </div>
      <h3 className='title'>Select an employee to view evaluation details:</h3>
      <ul className='emp-list'>
        {employees.map((employee) => (
          <li key={employee._id} onClick={(event)=>{onclick(employee._id, event)}}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmpList;
