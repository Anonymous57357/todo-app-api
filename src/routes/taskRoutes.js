const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Validation middleware
const validateTask = [
  check('title').not().isEmpty().withMessage('Title is required'),
];

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route definitions
router.get('/', getTasks);
router.post('/', validateTask, handleValidationErrors, createTask);
router.put('/:id', validateTask, handleValidationErrors, updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
