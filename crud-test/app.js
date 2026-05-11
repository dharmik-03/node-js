import express from "express";
import httpError from "./middlewares/httpError.js";

const app = express();

app.use(express.json());

const taskList = [
  {
    id: 1,
    task: "this is task 1",
    message: "this is message 1",
  },
  {
    id: 2,
    task: "this is task 2",
    message: "this is message 2",
  },
];

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.get("/taskList", (req, res) => {
  if (taskList.length === 0) {
    return next(new httpError("task not found", taskList));
  }

  res.status(400).json({ success: true, message: "task found", taskList });
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
    return next(new httpError("task and message both are required"));
  }

  const newTask = [
    {
      id: new Date().getTime(),
      task,
      message,
    },
  ];

  taskList.push(newTask);

  res.status(200).json({ success: true, message: "task added" });
});

app.patch("/update/:id", (req, res, next) => {
  const id = Number(req.params.id);

  const findId = taskList.find((p) => p.id === id);

  if (!findId) {
    return next(new httpError("task not found"));
  }

  const { task, message } = req.body;

  if (task) {
    findId.task = task;
  }

  if (message) {
    findId.message = message;
  }

  res.status(201).json({ success: true, message: "task updated" });
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

const port = 5001;

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(`server is running on port ${port}`);
});
