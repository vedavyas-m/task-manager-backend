const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const tasks = require("./routes/tasks");
const connectToDB = require("./db/connect");
const port = process.env.PORT || 3000;
const notFound = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
// middleware
app.use(cors());
app.use(express.json());
// static files
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
// routes
// app.get("/api/v1/tasks")           -get all tasks
// app.post("/api/v1/tasks")          -add a task
// app.get("/api/v1/tasks/:id")       -get single task
// app.patch("/api/v1/tasks/:id")     -update task
// app.delete("/api/v1/tasks/:id")    -delete task

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URI);
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {}
};

start();
