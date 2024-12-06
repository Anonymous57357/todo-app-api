const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// Route definitions
router.get('/', getTasks);          // GET all tasks
router.post('/', createTask);       // POST a new task
router.put('/:id', updateTask);     // PUT update a task
router.delete('/:id', deleteTask);  // DELETE a task

module.exports = router;
