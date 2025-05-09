// controllers/taskController.js
import db from '../config/db.js';

export const getAllTasks = async (req, res) => {
  const [tasks] = await db.query('SELECT * FROM tasks');
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description required' });
  }
  await db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
  res.status(201).json({ message: 'Task created' });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
  res.json({ message: 'Task deleted' });
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    await db.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, id]);
    res.json({ message: 'Task updated' });
  };
  