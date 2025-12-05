import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students';


// Get 


export const getAllStudents = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.error('Error fetching students:', err.message);
    return [];
  }
};


// Create 


export const createStudent = async (studentData) => {
  try {
    const res = await axios.post(API_URL, studentData);
    return res.data;
  } catch (err) {
    console.error('Error creating student:', err.message);
  }
};


// Update 

export const updateStudent = async (id, studentData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, studentData);
    return res.data;
  } catch (err) {
    console.error('Error updating student:', err.message);
  }
};


// Delete 

export const deleteStudent = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error deleting student:', err.message);
  }
};