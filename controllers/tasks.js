const getAllTasks = (req, res) => {
  res.send("<h1>get all tasks</h1>");
};

const addTask = (req, res) => {
  res.send("<h1>add task</h1>");
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
