const express = require("express");

const router = express.Router();

const { getAllTasks, addTask } = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(addTask);

module.exports = router;
