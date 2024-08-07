import axios from 'axios';

//Get all employees (admin only)
const fetchEmployees = async () => {
  try {

    const response = await axios.get('/api/user/employees');	
   // console.log('Response from fetchEmployees:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

//Get Employee Evaluations
const fetchEvaluations = async () => {
  try {
    const response = await axios.get('/api/evaluations/');
    return response.data;
  } catch (error) {
    console.error('Error fetching evaluations:', error);
  }
};

//Get Employee Information
const getAccountInfo = async (userEmail) => {
  
  try {
    const response = await axios.get('/api/user/account', {
      params: {
        email: userEmail
      }
    });
    
    return response.data;
  } catch (error) {
    console.log('Error fetching account info from backend:', error);
  }
};

export { fetchEmployees, fetchEvaluations, getAccountInfo };