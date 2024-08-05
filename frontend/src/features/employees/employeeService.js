import axios from 'axios';

const API_URI = '/api/user/';

//Get all employees (admin only)
const fetchEmployees = async () => {
  try {

    const response = await axios.get(API_URI + 'employees');	
   // console.log('Response from fetchEmployees:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

//Get Employee Evaluations
const fetchEvaluations = async () => {
  try {
    const response = await axios.get(API_URI);
    return response.data;
  } catch (error) {
    console.error('Error fetching evaluations:', error);
  }
};

export { fetchEmployees, fetchEvaluations };