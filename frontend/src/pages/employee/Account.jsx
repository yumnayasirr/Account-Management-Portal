import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountInfo } from '../../features/employees/employeeService';

const Account = () => {

    const userEmail = useSelector(state => state.auth.userEmail);
    const [AccountInfo, setAccountInfo] = useState(null);

    useEffect(() => {
        const fetchAccountInfo = async () => {
          if (userEmail) {
            const data = await getAccountInfo(userEmail);
            setAccountInfo(data);
          }
        };
    
        fetchAccountInfo();
      }, [userEmail]);
    
      if (!AccountInfo) {
        return <div>Loading...</div>;
      }
    
      const { name, email, role, position, salary, department, phone } = AccountInfo;

  return (
    <div className='account-container'>
        <h1 className='title'>Account Information</h1>
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <p>Role:{role}</p>
        <p>Position:{position}</p>
        <p>Salary:{salary}</p>
        <p>Department:{department}</p>
        <p>Phone:{phone}</p>
    </div>
  )
}

export default Account