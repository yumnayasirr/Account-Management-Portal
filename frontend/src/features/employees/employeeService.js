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

export { fetchEmployees, fetchEvaluations };