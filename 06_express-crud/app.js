import express from "express";

const app = express();

app.use(express.json());

const taskList = [
  { id: 1, task: "learn", message: "you want to learn new things" },
  { id: 2, task: "practice", message: "you want to practice every day" },
];

app.get("/", (req, res) => {
  res.json("hello from server");
});

app.get("/taskList", (req, res) => {
  if (taskList.length === 0) {
    return res.status(200).json({
      message: "Task not available",
    });
  }

  res.status(200).json({ success: true, message: "task list", taskList });
});

app.get("/tasklist/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const task = taskList.find((t) => t.id === id);

  if (!task) {
    return res
      .status(404)
      .json({ success: true, message: "no task found with this id" });
  }

  res.status(200).json({ success: true, message: "task found", task });
});

app.post("/addTask", (req, res, next) => {
  const { task, message } = req.body;

  if (!task || !message) {
    return next(new httpError("task or message are required", 400));
  }

  const newTask = {
    id: new Date().getTime(),
    task,
    message,
  };

  taskList.push(newTask);

  res
    .status(201)
    .json({ success: true, message: "task added succesfully", newTask });
});

app.patch("/update/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const taskData = taskList.find((p) => p.id === id);

  if (!taskData) {
    return next(new httpError("not found", 400));
  }

  const { task, message } = req.body;

  if (task) {
    taskData.task = task;
  }
  if (message) {
    taskData.message = message;
  }

  res.status(200).json({
    success: true,
    message: "task data updated successfully",
    taskData,
  });
});

app.delete("/delete/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const findTask = taskList.findIndex((p) => p.id === id);

  if (findTask === -1) {
    return next(new httpError("task not found", 404));
  }

  taskList.splice(findTask, 1);

  res.status(200).json({ success: true, message: "task data deleted" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message || "something went wrong" });
});

const port = 5001;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(`server is running in port ${port}`);
});
