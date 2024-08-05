import axios from 'axios';

const API_URI = '/api/user/employees';

const fetchEmployees = async () => {
  try {

    const response = await axios.get(API_URI);
   // console.log('Response from fetchEmployees:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

export { fetchEmployees };