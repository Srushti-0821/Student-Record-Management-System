import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Student Records</h2>
      {students.length === 0 ? (
        <p>No student records found.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Class</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.class}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td>
                  <button onClick={() => onEdit(student)}>Edit</button>
                  <button onClick={() => onDelete(student._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;