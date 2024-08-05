import React, { useState, useEffect } from 'react';
import {fetchEmployees} from '../features/employees/employeeService';

const EmpList = () => {
  const [employees, setEmployees] = useState([]);

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
  const onclick = () => {};

  return (
    <div>
      <h2 className='title'>Employee List</h2>
      <ul className='emp-list'>
        {employees.map((employee) => (
          <li key={employee._id} onClick={onclick}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmpList;
