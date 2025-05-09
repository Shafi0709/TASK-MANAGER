// models/taskModel.js
import { db } from '../config/db.js';

export const getAllTasks = async () => {
  const [rows] = await db.query('SELECT * FROM tasks');
  return rows;
};

export const getTaskById = async (id) => {
  const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
  return rows[0];
};

export const createTask = async (title, description) => {
  const [result] = await db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
  return { id: result.insertId, title, description, status: 'pending' };
};

export const updateTask = async (id, title, description, status) => {
  await db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id]);
};

export const deleteTask = async (id) => {
  await db.query('DELETE FROM tasks WHERE id = ?', [id]);
};
