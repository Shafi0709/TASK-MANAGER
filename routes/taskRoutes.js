import express from 'express';
import { getAllTasks, createTask, deleteTask, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTask);       // ✅ ADD THIS
router.delete('/:id', deleteTask);

export default router;
