import React, { useState, useEffect } from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import { getAllStudents, createStudent, updateStudent, deleteStudent,} from '../services/studentService';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch 
  
  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Add or update student

  const handleFormSubmit = async (formData) => {
    if (editingStudent) {
      await updateStudent(editingStudent._id, formData);
    } else {
      await createStudent(formData);
    }
    setEditingStudent(null);
    fetchStudents();
  };

  // Edit 
  
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Cancel edit

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  // Delete 

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div style={{ display: 'flex', gap: '30px', padding: '20px' }}>

      <div style={{ flex: 1 }}>
        <StudentForm  onSubmit={handleFormSubmit} editingStudent={editingStudent} cancelEdit={handleCancelEdit} />
      </div>
      
      <div style={{ flex: 2 }}>
        <StudentList  students={students} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

    </div>
  );
};

export default Home;