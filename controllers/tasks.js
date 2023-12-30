const getAllTasks = (req, res) => {
  res.send("<h1>get all tasks</h1>");
};

const addTask = (req, res) => {
  res.send("<h1>add task</h1>");
};

module.exports = {
  getAllTasks,
  addTask,
};
