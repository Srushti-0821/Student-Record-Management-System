import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, editingStudent, cancelEdit }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    class: '',
    section: '',
    marks: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      rollNumber: '',
      class: '',
      section: '',
      marks: ''
    });
  };

  return (
    <div>
      
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
      
      <form onSubmit={handleSubmit}>
        
        <input type="text"name="name" placeholder="Student Name" value={formData.name} onChange={handleChange} required />
        
        <input type="text" name="rollNumber" placeholder="Roll Number" value={formData.rollNumber} onChange={handleChange} required
        disabled={!!editingStudent} />
        
        <input type="text" name="class" placeholder="Class" value={formData.class} onChange={handleChange} required />
       
        <input type="text" name="section" placeholder="Section" value={formData.section} onChange={handleChange} required  />
       
        <input type="number" name="marks" placeholder="Marks" value={formData.marks} onChange={handleChange} required />

        <button type="submit">{editingStudent ? 'Update' : 'Add'}</button>

        {editingStudent && <button onClick={cancelEdit}>Cancel</button>}
      </form>

    </div>
  );
};

export default StudentForm;