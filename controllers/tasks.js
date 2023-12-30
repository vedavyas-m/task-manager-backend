const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find().select({
    createdAt: 0,
    updatedAt: 0,
    __v: 0,
  });
  res.json(tasks);
};

const addTask = async (req, res) => {
  //   console.log(req.body.task);
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getTask = (req, res) => {
  res.send("<h1>get single task</h1>");
};

const updateTask = (req, res) => {
  res.send("<h1>update task</h1>");
};

const deleteTask = (req, res) => {
  res.send("<h1>delete task</h1>");
};

module.exports = {
  getAllTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
