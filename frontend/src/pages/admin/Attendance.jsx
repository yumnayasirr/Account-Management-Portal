import React, { useState, useEffect } from 'react';
import { fetchEmployees } from '../../features/employees/employeeService'; // Adjust import path
import axios from 'axios';

const AttendanceTable = () => {
  const [employees, setEmployees] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [attendance, setAttendance] = useState({}); // Using this state for attendance

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await fetchEmployees();
        setEmployees(response);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    const calculateDaysInMonth = () => {
      const now = new Date();
      const month = now.getMonth();

      // Number of days for each month
      let days;

      switch (month) {
        case 0: case 2: case 4: case 6: case 7: case 9: case 11:
          days = 31;
          break;
        case 3: case 5: case 8: case 10:
          days = 30;
          break;
        case 1:
          const year = now.getFullYear();
          days = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
          break;
        default:
          days = 30;
      }

      setDaysInMonth(days);
    };

    getEmployees();
    calculateDaysInMonth();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      // Fetch the data from the API
      const response = await axios.get('/api/attendance');
      const data = response.data;

      // Log the raw data for debugging
      console.log('Fetched data:', data);

      // Transform the data into a format you can use
      const attendanceMap = {};

      // Process each employee's attendance records
      data.forEach(employee => {
        if (!employee.attendance || !Array.isArray(employee.attendance)) {
          console.warn('Invalid attendance data for employee:', employee);
          return;
        }

        employee.attendance.forEach(record => {
          let date;
          if (typeof record.date === 'string') {
            date = new Date(record.date); // Convert string to Date
          } else if (record.date instanceof Date) {
            date = record.date;
          } else {
            console.warn('Invalid date format:', record.date);
            return;
          }

          const day = date.getDate();
          const key = `${employee.userID}-${day}`;
          attendanceMap[key] = record.status;

          // Log each record for debugging
          console.log('Processed record:', { key, status: record.status });
        });
      });

      // Log the final attendance map for debugging
      console.log('Final attendance map:', attendanceMap);

      // Update the state with the transformed data
      setAttendance(attendanceMap);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const handleDropdownChange = (userID, day, value) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [`${userID}-${day}`]: value
    }));
  };

  const handleUpdateAttendance = () => {
    const attendanceRecords = Object.keys(attendance).map(key => {
      console.log({attendance, key}) 

      const [userId, day] = key.split('-');
      return {
        userId,
        date: new Date(new Date().getFullYear(), new Date().getMonth(), day),
        status: attendance[key]
      };
    });

    axios.post('/api/attendance', attendanceRecords)
      .then(response => {
        console.log('Attendance updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating attendance:', error);
      });
  };

  const generateDropdownOptions = () => (
    <>
      <option value="">Select</option>
      <option value="Present">Present</option>
      <option value="Absent">Absent</option>
      <option value="Late">Late</option>
      <option value="Leave">Leave</option>
    </>
  );

  const renderTableHeader = () => {
    const headers = ['User ID', 'Employee Name'];
    for (let i = 1; i <= daysInMonth; i++) {
      headers.push(i.toString());
    }
    return headers.map((header, index) => (
      <th key={index}>{header}</th>
    ));
  };

  const renderTableRows = () => {
    return employees.map(employee => {
      if (!employee.userID) {
        console.warn('Employee missing userID:', employee); // Log missing userID
        return null;
      }

      return (
        <tr key={`row-${employee.userID}`}>
          <td>{employee.userID}</td>
          <td>{employee.name}</td>
          {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
            const day = dayIndex + 1;
            const uniqueKey = `${employee.userID}-${day}`;
            const selectedValue = attendance[uniqueKey] || '';

            return (
              <td key={`cell-${employee.userID}-${day}`}>
                <select
                  value={selectedValue}
                  onChange={(e) => handleDropdownChange(employee.userID, day, e.target.value)}
                >
                  {generateDropdownOptions()}
                </select>
              </td>
            );
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="emp-title-container">
        <h2 className='title'>Employee Attendance</h2>
        <input type="text" placeholder="Search Employee" className="search-emp" />
      </div>
      <table>
        <thead>
          <tr>
            {renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
      <div className="save-button-container">
        <button onClick={handleUpdateAttendance}>Save</button>
      </div>
    </div>
  );
};

export default AttendanceTable;
