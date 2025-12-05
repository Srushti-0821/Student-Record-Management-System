const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController');

// Create 
router.post('/', createStudent);

// Get 
router.get('/', getAllStudents);

// Update 
router.put('/:id', updateStudent);

// Delete 
router.delete('/:id', deleteStudent);

module.exports = router;