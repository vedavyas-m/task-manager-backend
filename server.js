const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

// app.get("/api/v1/tasks")           -get all tasks
// app.post("/api/v1/tasks")          -add a task
// app.get("/api/v1/tasks/:id")       -get single task
// app.patch("/api/v1/tasks/:id")     -update task
// app.delete("/api/v1/tasks/:id")    -delete task

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`server is listening on port ${port}`);
});
